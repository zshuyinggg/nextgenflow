export async function onRequest(context) {
  // Add debug logging
  console.log('Context:', {
    env: Object.keys(context.env),
    hasKV: !!context.env.NEWSLETTER_SUBSCRIBERS,
  });

  // Handle CORS preflight requests
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  // Only allow POST requests
  if (context.request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const formData = await context.request.formData();
    const email = formData.get('email');
    console.log('Received email:', email);

    // Debug KV binding
    if (!context.env.NEWSLETTER_SUBSCRIBERS) {
      throw new Error('KV binding NEWSLETTER_SUBSCRIBERS is not defined');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Store in KV
    await context.env.NEWSLETTER_SUBSCRIBERS.put(email, JSON.stringify({
      subscribed: new Date().toISOString(),
    }));

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Successfully subscribed!'
    }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response(JSON.stringify({ 
      error: 'Server error', 
      details: error.message,
      // Add debug info
      context: {
        env: Object.keys(context.env),
        hasKV: !!context.env.NEWSLETTER_SUBSCRIBERS,
      }
    }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
} 