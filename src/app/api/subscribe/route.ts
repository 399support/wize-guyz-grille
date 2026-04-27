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
    const { name, email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_AUDIENCE_ID;
    
    // Extract server prefix from API key (format: xxx-usxx)
    const serverPrefix = apiKey ? apiKey.split('-')[1] : null;

    if (!apiKey || !listId || !serverPrefix) {
      // Env vars not configured - return proper error
      console.error('Mailchimp env vars not set:', { apiKey: !!apiKey, listId: !!listId, serverPrefix });
      return NextResponse.json({ error: 'Mailchimp not configured. Please contact administrator.' }, { status: 500 });
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
        merge_fields: {
          FNAME: name.trim(),
        },
        tags: ['Wize Guyz Club'],
      }),
    });

    const data = await response.json();

    console.log("Mailchimp Response:", response.status, data);

    if (response.status === 400 && data.title === 'Member Exists') {
      // Already subscribed - treat as success
      console.log("Member already exists, treating as success");
      return NextResponse.json({ success: true });
    }

    if (!response.ok) {
      console.error("Mailchimp Error:", data);
      const errorMessage = data.title || data.detail || 'Subscription failed. Please try again.';
      return NextResponse.json({ error: errorMessage }, { status: response.status });
    }

    console.log("Mailchimp Success:", data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
