/**
 * Bouillonnantes — Newsletter Worker
 *
 * Proxies subscription requests to the Brevo API without exposing the API key
 * to the browser. Deploy with Cloudflare Workers (free tier).
 *
 * Setup:
 *   npx wrangler deploy
 *   npx wrangler secret put BREVO_API_KEY
 *
 * Environment variables (set in wrangler.toml [vars] or Cloudflare dashboard):
 *   ALLOWED_LIST_IDS  — comma-separated numeric Brevo list IDs, e.g. "5,12"
 *
 * Secrets (set via `wrangler secret put`):
 *   BREVO_API_KEY     — Brevo API key (contacts permission only)
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request, env) {
    // Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    // Parse body
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    const { email, listIds } = body;

    // Validate email
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return json({ error: "Invalid email address" }, 400);
    }

    // Validate listIds against allowed set
    const allowedIds = (env.ALLOWED_LIST_IDS ?? "")
      .split(",")
      .map((s) => Number(s.trim()))
      .filter(Boolean);

    if (!Array.isArray(listIds) || listIds.length === 0) {
      return json({ error: "No lists selected" }, 400);
    }

    const invalidIds = listIds.filter((id) => !allowedIds.includes(Number(id)));
    if (invalidIds.length > 0) {
      return json({ error: "Invalid list selection" }, 400);
    }

    // Call Brevo — double opt-in confirmation flow
    let brevoRes;
    try {
      brevoRes = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
        method: "POST",
        headers: {
          "api-key": env.BREVO_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          includeListIds: listIds.map(Number),
          templateId: Number(env.BREVO_DOI_TEMPLATE_ID ?? 2),
          redirectionUrl: "https://edhubertstudio.github.io/bouillonnantes/",
        }),
      });
    } catch {
      return json({ error: "Network error reaching Brevo" }, 502);
    }

    if (brevoRes.ok) {
      return json({ success: true });
    }

    let brevoBody = "";
    try { brevoBody = await brevoRes.text(); } catch { /* ignore */ }

    let errorMessage = "Subscription failed";
    try { errorMessage = JSON.parse(brevoBody)?.message ?? errorMessage; } catch { /* ignore */ }

    return json({ error: errorMessage }, brevoRes.status);
  },
};
