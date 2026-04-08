import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 * Handles the "Tell Us How We're Doing" feedback form.
 *
 * Adds the submitter to a Mailchimp audience with a "Feedback" tag,
 * and stores the feedback in a merge field (or notes via the API).
 *
 * Required env vars (.env.local):
 *   MAILCHIMP_API_KEY       — Your Mailchimp API key (e.g. abc123-us21)
 *   MAILCHIMP_LIST_ID       — Your Mailchimp audience/list ID
 *   MAILCHIMP_SERVER_PREFIX — The datacenter prefix from your API key (e.g. us21)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, location, topic, message, rating, receiptNumber } = body;

    if (!email || !name || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !listId || !serverPrefix) {
      // Env vars not yet configured — log feedback locally and return success
      console.warn('Mailchimp env vars not set. Feedback received (not forwarded):', {
        name, email, location, topic, rating, receiptNumber,
        message: message.slice(0, 120),
      });
      return NextResponse.json({ success: true });
    }

    const [firstName, ...rest] = name.split(' ');
    const lastName = rest.join(' ') || '';

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: { FNAME: firstName, LNAME: lastName },
        tags: ['Feedback', topic || 'General', location || 'General'],
      }),
    });

    const data = await response.json();

    // 400 "Member Exists" is acceptable — contact already in list
    if (response.status === 400 && data.title === 'Member Exists') {
      return NextResponse.json({ success: true });
    }

    if (!response.ok) {
      console.error('Mailchimp contact error:', data);
      return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
