import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: boolean;
  // Honeypot anti-spam : doit rester vide.
  website?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 },
    );
  }

  // Honeypot : si rempli, on renvoie un succès silencieux sans envoyer.
  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const subject = data.subject?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Veuillez indiquer votre nom.";
  if (!EMAIL_REGEX.test(email)) errors.email = "Adresse email invalide.";
  if (subject.length < 2) errors.subject = "Veuillez indiquer un objet.";
  if (message.length < 10)
    errors.message = "Votre message doit contenir au moins 10 caractères.";
  if (!data.consent) errors.consent = "Le consentement est requis.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  // Mode démo : sans clé API, on n'envoie pas d'email mais on confirme la réception.
  if (!apiKey || !to) {
    console.info("[contact] Message reçu (mode démo, email non envoyé):", {
      name,
      email,
      subject,
    });
    return NextResponse.json({ ok: true, demo: true });
  }

  const html = `
    <h2>Nouveau message depuis le site</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Objet :</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Site Je vis en Rose <${from}>`,
        to: [to],
        reply_to: email,
        subject: `[Contact] ${subject}`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[contact] Échec Resend:", detail);
      return NextResponse.json(
        { error: "L'envoi a échoué. Merci de réessayer plus tard." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Erreur réseau:", error);
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de réessayer plus tard." },
      { status: 502 },
    );
  }
}
