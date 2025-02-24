export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const formData = await request.formData();
    const email = formData.get('email');

    // Add debugging logs
    console.log('Received email:', email);
    console.log('KV namespace:', env.NEWSLETTER_SUBSCRIBERS);

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
    }

    // Store email in KV
    await env.NEWSLETTER_SUBSCRIBERS.put(email, JSON.stringify({
      subscribed: new Date().toISOString(),
    }));

    // Verify storage
    const stored = await env.NEWSLETTER_SUBSCRIBERS.get(email);
    console.log('Stored data:', stored);

    return new Response(JSON.stringify({ success: true }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  }
} 