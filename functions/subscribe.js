export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const formData = await request.formData();
    const email = formData.get('email');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Store email in KV
    await env.NEWSLETTER_SUBSCRIBERS.put(email, JSON.stringify({
      subscribed: new Date().toISOString(),
    }));

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 