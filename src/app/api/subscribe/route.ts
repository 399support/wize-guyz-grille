import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/subscribe
 * Adds an email to the Wize Guyz Club Mailchimp list.
 *
 * Required env vars (.env.local):
 *   MAILCHIMP_API_KEY      — Your Mailchimp API key (e.g. abc123-us21)
 *   MAILCHIMP_LIST_ID      — Your Mailchimp audience/list ID
 *   MAILCHIMP_SERVER_PREFIX — The datacenter prefix from your API key (e.g. us21)
 */
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !listId || !serverPrefix) {
      // Env vars not yet configured — return success for dev/preview
      console.warn('Mailchimp env vars not set. Skipping API call.');
      return NextResponse.json({ success: true });
    }

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
        tags: ['Wize Guyz Club'],
      }),
    });

    const data = await response.json();

    if (response.status === 400 && data.title === 'Member Exists') {
      // Already subscribed — treat as success
      return NextResponse.json({ success: true });
    }

    if (!response.ok) {
      console.error('Mailchimp error:', data);
      return NextResponse.json({ error: 'Subscription failed. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
