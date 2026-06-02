"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message" | "consent", string>
>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [globalError, setGlobalError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    setErrors({});
    setGlobalError(null);

    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          setStatus("success");
          form.reset();
          return;
        }

        const data = await res.json().catch(() => ({}));
        if (res.status === 422 && data.errors) {
          setErrors(data.errors as FieldErrors);
        } else {
          setStatus("error");
          setGlobalError(
            data.error ?? "Une erreur est survenue. Merci de réessayer.",
          );
        }
      } catch {
        setStatus("error");
        setGlobalError("Impossible d'envoyer le message. Vérifiez votre connexion.");
      }
    });
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-cream p-8 text-center"
      >
        <CheckCircle2 className="size-10 text-rose" aria-hidden="true" />
        <h2 className="font-heading text-xl font-semibold text-prune">
          Message envoyé, merci !
        </h2>
        <p className="text-muted-foreground">
          Nous avons bien reçu votre message et reviendrons vers vous dès que
          possible.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {globalError && (
        <p
          role="alert"
          className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {globalError}
        </p>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Nom *</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Objet *</Label>
        <Input
          id="subject"
          name="subject"
          required
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-sm text-destructive">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot anti-spam — caché visuellement et aux lecteurs d'écran */}
      <div aria-hidden="true" className="hidden">
        <Label htmlFor="website">Ne pas remplir</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 size-4 rounded border-border text-prune accent-[var(--prune)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground">
          J&apos;accepte que les informations saisies soient utilisées pour me
          recontacter. Elles ne sont pas conservées sur ce site.
        </Label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="text-sm text-destructive">
          {errors.consent}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isPending}>
        <Send className="size-4" aria-hidden="true" />
        {isPending ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
    </form>
  );
}
