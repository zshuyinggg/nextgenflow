export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    
    // Log the request
    console.log('Received request:', request.method);
    
    const formData = await request.formData();
    const email = formData.get('email');
    console.log('Received email:', email);

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
    }

    // Store in KV
    console.log('Storing email in KV');
    await env.NEWSLETTER_SUBSCRIBERS.put(email, JSON.stringify({
      subscribed: new Date().toISOString(),
    }));

    // Verify storage
    const stored = await env.NEWSLETTER_SUBSCRIBERS.get(email);
    console.log('Stored data:', stored);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Successfully subscribed!'
    }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ 
      error: 'Server error', 
      details: error.message 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });
  }
} 