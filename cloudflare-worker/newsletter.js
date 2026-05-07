/**
 * Bouillonnantes — API Worker
 *
 * Routes:
 *   POST /newsletter  — subscribe to Brevo lists (double opt-in)
 *   POST /contact     — send revendeur enquiry via Brevo transactional email
 *
 * Setup:
 *   npx wrangler deploy --config wrangler.toml
 *   npx wrangler secret put BREVO_API_KEY --config wrangler.toml
 *
 * Environment variables (wrangler.toml [vars]):
 *   ALLOWED_ORIGINS        — space-separated allowed origins
 *   ALLOWED_LIST_IDS       — comma-separated Brevo list IDs for newsletter
 *   CONTACT_TO_EMAIL       — recipient address for revendeur enquiries
 *   CONTACT_FROM_EMAIL     — verified Brevo sender address
 *
 * Secrets (wrangler secret put):
 *   BREVO_API_KEY          — Brevo API key
 */

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function json(data, status = 200, origin = null) {
  const headers = { "Content-Type": "application/json" };
  if (origin) Object.assign(headers, corsHeaders(origin));
  return new Response(JSON.stringify(data), { status, headers });
}

async function handleNewsletter(request, env, matched) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400, matched);
  }

  const { email, listIds } = body;

  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return json({ error: "Invalid email address" }, 400, matched);
  }

  const allowedIds = (env.ALLOWED_LIST_IDS ?? "")
    .split(",")
    .map((s) => Number(s.trim()))
    .filter(Boolean);

  if (!Array.isArray(listIds) || listIds.length === 0) {
    return json({ error: "No lists selected" }, 400, matched);
  }

  const invalidIds = listIds.filter((id) => !allowedIds.includes(Number(id)));
  if (invalidIds.length > 0) {
    return json({ error: "Invalid list selection" }, 400, matched);
  }

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
    return json({ error: "Network error reaching Brevo" }, 502, matched);
  }

  if (brevoRes.ok) return json({ success: true }, 200, matched);

  let errorMessage = "Subscription failed";
  try {
    const b = await brevoRes.text();
    errorMessage = JSON.parse(b)?.message ?? errorMessage;
  } catch { /* ignore */ }

  return json({ error: errorMessage }, brevoRes.status, matched);
}

async function handleContact(request, env, matched) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400, matched);
  }

  const { nom, boutique, email, message } = body;

  if (!nom || typeof nom !== "string" || !nom.trim()) {
    return json({ error: "Nom requis" }, 400, matched);
  }
  if (!boutique || typeof boutique !== "string" || !boutique.trim()) {
    return json({ error: "Nom de boutique requis" }, 400, matched);
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return json({ error: "Email invalide" }, 400, matched);
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    return json({ error: "Message requis" }, 400, matched);
  }

  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL;
  if (!toEmail || !fromEmail) {
    return json({ error: "Server misconfiguration" }, 500, matched);
  }

  let brevoRes;
  try {
    brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": env.BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Bouillonnantes", email: fromEmail },
        to: [{ email: toEmail }],
        replyTo: { email: email.trim(), name: nom.trim() },
        subject: `Nouvelle demande revendeur — ${boutique.trim()}`,
        htmlContent: `
          <p><strong>Nom :</strong> ${nom.trim()}</p>
          <p><strong>Boutique :</strong> ${boutique.trim()}</p>
          <p><strong>Email :</strong> ${email.trim()}</p>
          <p><strong>Message :</strong></p>
          <p>${message.trim().replace(/\n/g, "<br>")}</p>
        `,
      }),
    });
  } catch {
    return json({ error: "Network error reaching Brevo" }, 502, matched);
  }

  if (brevoRes.ok) return json({ success: true }, 200, matched);

  let errorMessage = "Envoi échoué";
  try {
    const b = await brevoRes.text();
    errorMessage = JSON.parse(b)?.message ?? errorMessage;
  } catch { /* ignore */ }

  return json({ error: errorMessage }, brevoRes.status, matched);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") ?? "";
    const allowedOrigins = (env.ALLOWED_ORIGINS ?? "").split(/\s+/).filter(Boolean);
    const matched = allowedOrigins.includes(origin) ? origin : null;

    if (request.method === "OPTIONS") {
      if (!matched) return new Response(null, { status: 403 });
      return new Response(null, { headers: corsHeaders(matched) });
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, matched);
    }

    const path = new URL(request.url).pathname;

    if (path === "/newsletter") return handleNewsletter(request, env, matched);
    if (path === "/contact") return handleContact(request, env, matched);

    return json({ error: "Not found" }, 404, matched);
  },
};
