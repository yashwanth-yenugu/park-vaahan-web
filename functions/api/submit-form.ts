// Define the expected request data shape
type RequestData = {
  name: string;
  phone: string;
  email?: string;
  city: string;
  purpose: "find" | "list";
};

// Update Env type to include KV binding
type Env = {
  NEW_LEAD: KVNamespace;
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = (await context.request.json()) as RequestData;

    // Generate a unique key for the KV entry using timestamp and phone
    const key = `lead_${Date.now()}_${data.phone}`;

    // Store the form data in KV with metadata
    await context.env.NEW_LEAD.put(key, JSON.stringify(data), {
      metadata: {
        timestamp: new Date().toISOString(),
        source: "web_form",
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};

// Handle OPTIONS request for CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
