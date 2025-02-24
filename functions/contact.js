export async function onRequest(context) {
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
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    // Store in KV with a unique key based on timestamp
    const key = `contact_${Date.now()}_${data.email}`;
    await context.env.CONTACT_MESSAGES.put(key, JSON.stringify(data));

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Message received successfully!'
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
      details: error.message 
    }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
} 