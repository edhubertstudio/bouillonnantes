"use client";

import { useState, useEffect, useRef } from "react";

type Step = 1 | 2;
type Status = "idle" | "submitting" | "success" | "error";
type Interest = "actualites" | "recettes";

interface NewsletterFormProps {
  variant: "full" | "compact";
}

const INTERESTS: { key: Interest; label: string; envVar: string }[] = [
  { key: "actualites", label: "Actualités du projet", envVar: "NEXT_PUBLIC_BREVO_LIST_ACTUALITES" },
  { key: "recettes",   label: "Recettes",             envVar: "NEXT_PUBLIC_BREVO_LIST_RECETTES" },
];

function getListId(envVar: string): number | null {
  const val = Number(
    envVar === "NEXT_PUBLIC_BREVO_LIST_ACTUALITES"
      ? process.env.NEXT_PUBLIC_BREVO_LIST_ACTUALITES
      : process.env.NEXT_PUBLIC_BREVO_LIST_RECETTES
  );
  return val > 0 ? val : null;
}

export function NewsletterForm({ variant }: NewsletterFormProps) {
  const isCompact = variant === "compact";

  const [step, setStep]                   = useState<Step>(1);
  const [email, setEmail]                 = useState("");
  const [interests, setInterests]         = useState<Set<Interest>>(new Set());
  const [status, setStatus]               = useState<Status>("idle");
  const [emailError, setEmailError]       = useState<string | null>(null);
  const [interestError, setInterestError] = useState<string | null>(null);
  const [fading, setFading]               = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Fade transition helper — fade out → swap content → fade in
  const fadeTransition = (fn: () => void) => {
    setFading(true);
    setTimeout(() => {
      fn();
      setFading(false);
    }, 280);
  };

  // Restore focus to container on step change (accessibility)
  useEffect(() => {
    if (!fading) containerRef.current?.focus({ preventScroll: true });
  }, [step, fading]);

  function validateEmail(value: string): string | null {
    if (!value.trim()) return "Votre email est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Adresse email invalide.";
    return null;
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateEmail(email);
    if (err) { setEmailError(err); return; }
    setEmailError(null);
    fadeTransition(() => setStep(2));
  }

  function toggleInterest(key: Interest) {
    setInterests((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
    setInterestError(null);
  }

  async function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    if (interests.size === 0) {
      setInterestError("Sélectionnez au moins un centre d'intérêt.");
      return;
    }

    const listIds = Array.from(interests)
      .map((key) => {
        const item = INTERESTS.find((i) => i.key === key)!;
        return getListId(item.envVar);
      })
      .filter((id): id is number => id !== null);

    const workerUrl = process.env.NEXT_PUBLIC_BREVO_WORKER_URL;

    setStatus("submitting");
    try {
      const res = await fetch(`${workerUrl}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), listIds }),
      });

      if (res.ok) {
        fadeTransition(() => setStatus("success"));
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const containerStyle: React.CSSProperties = {
    opacity: fading ? 0 : 1,
    transform: fading ? "translateY(6px)" : "translateY(0)",
    transition: "opacity 0.28s ease-out, transform 0.28s ease-out",
    outline: "none",
  };

  const inputStyle: React.CSSProperties = {
    background: isCompact ? "rgba(253,246,238,0.06)" : "rgba(253,246,238,0.05)",
    border: "1px solid rgba(253,246,238,0.15)",
    color: "#fdf6ee",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    padding: "11px 14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  const primaryBtnStyle: React.CSSProperties = {
    background: status === "submitting" ? "rgba(255,144,33,0.6)" : "#ff9021",
    color: "#180c04",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    border: "none",
    cursor: status === "submitting" ? "not-allowed" : "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
  };

  const errorStyle: React.CSSProperties = {
    color: "#ff9021",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    marginTop: 6,
  };

  /* ── Success ─────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div ref={containerRef} tabIndex={-1} style={containerStyle}>
        <p
          style={{
            color: "#fdf6ee",
            fontFamily: "'Cormorant Garant', serif",
            fontSize: isCompact ? 16 : 20,
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          Merci !
        </p>
        <p
          style={{
            color: "rgba(253,246,238,0.65)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          Vérifiez votre boîte de {email.trim()} pour confirmer votre inscription.
        </p>
      </div>
    );
  }

  /* ── Full variant — Step 1 ───────────────────────────── */
  if (!isCompact && step === 1) {
    return (
      <div ref={containerRef} tabIndex={-1} style={containerStyle}>
        <form onSubmit={handleEmailSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input
            type="email"
            value={email}
            placeholder="votre@email.fr"
            onChange={(e) => { setEmail(e.target.value); setEmailError(null); }}
            onBlur={() => { if (email) setEmailError(validateEmail(email)); }}
            aria-label="Adresse email"
            aria-describedby={emailError ? "email-error-full" : undefined}
            style={inputStyle}
          />
          {emailError && <p id="email-error-full" style={errorStyle}>{emailError}</p>}
          <button type="submit" style={{ ...primaryBtnStyle, padding: "13px 32px", alignSelf: "center" }}>
            S&apos;abonner
          </button>
          <p style={{ color: "rgba(253,246,238,0.45)", fontFamily: "'DM Sans', sans-serif", fontSize: 11, textAlign: "center", lineHeight: 1.5 }}>
            En vous inscrivant, vous acceptez de recevoir des emails de Bouillonnantes.
            Vous pouvez vous désabonner à tout moment.
          </p>
        </form>
      </div>
    );
  }

  /* ── Full variant — Step 2 ───────────────────────────── */
  if (!isCompact && step === 2) {
    return (
      <div ref={containerRef} tabIndex={-1} style={containerStyle}>
        <p style={{ color: "rgba(253,246,238,0.55)", fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginBottom: 16, textAlign: "center" }}>
          Que souhaitez-vous recevoir ?
        </p>
        <form onSubmit={handleConfirm} noValidate style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          {INTERESTS.map(({ key, label }) => (
            <label
              key={key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: "rgba(253,246,238,0.8)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <input
                type="checkbox"
                checked={interests.has(key)}
                onChange={() => toggleInterest(key)}
                style={{ accentColor: "#ff9021", width: 16, height: 16, cursor: "pointer", flexShrink: 0 }}
              />
              {label}
            </label>
          ))}
          {interestError && <p style={errorStyle}>{interestError}</p>}
          {status === "error" && (
            <p style={errorStyle}>Une erreur est survenue. Veuillez réessayer.</p>
          )}
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 8 }}>
            <button
              type="button"
              onClick={() => { setStatus("idle"); fadeTransition(() => setStep(1)); }}
              style={{ background: "none", border: "none", color: "rgba(253,246,238,0.45)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, cursor: "pointer", textDecoration: "underline" }}
            >
              ← Modifier l&apos;email
            </button>
            <button
              type="submit"
              disabled={status === "submitting"}
              style={{ ...primaryBtnStyle, padding: "13px 32px" }}
            >
              {status === "submitting" ? "Envoi…" : "Confirmer"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  /* ── Compact variant ─────────────────────────────────── */
  return (
    <div ref={containerRef} tabIndex={-1} style={containerStyle}>
      {/* Step 1 — inline row */}
      {step === 1 && (
        <form onSubmit={handleEmailSubmit} noValidate>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              value={email}
              placeholder="votre@email.fr"
              onChange={(e) => { setEmail(e.target.value); setEmailError(null); }}
              onBlur={() => { if (email) setEmailError(validateEmail(email)); }}
              aria-label="Adresse email"
              aria-describedby={emailError ? "email-error-compact" : undefined}
              style={{ ...inputStyle, flex: 1, minWidth: 0 }}
            />
            <button type="submit" style={{ ...primaryBtnStyle, padding: "11px 18px" }}>
              S&apos;abonner
            </button>
          </div>
          {emailError && <p id="email-error-compact" style={errorStyle}>{emailError}</p>}
        </form>
      )}

      {/* Step 2 — expands below */}
      {step === 2 && (
        <form onSubmit={handleConfirm} noValidate style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ color: "rgba(253,246,238,0.55)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, marginBottom: 4 }}>
            Que souhaitez-vous recevoir ?
          </p>
          {INTERESTS.map(({ key, label }) => (
            <label
              key={key}
              style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(253,246,238,0.8)", fontFamily: "'DM Sans', sans-serif", fontSize: 13, cursor: "pointer" }}
            >
              <input
                type="checkbox"
                checked={interests.has(key)}
                onChange={() => toggleInterest(key)}
                style={{ accentColor: "#ff9021", width: 14, height: 14, cursor: "pointer", flexShrink: 0 }}
              />
              {label}
            </label>
          ))}
          {interestError && <p style={errorStyle}>{interestError}</p>}
          {status === "error" && <p style={errorStyle}>Une erreur est survenue. Réessayez.</p>}
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 4 }}>
            <button
              type="button"
              onClick={() => { setStatus("idle"); fadeTransition(() => setStep(1)); }}
              style={{ background: "none", border: "none", color: "rgba(253,246,238,0.4)", fontFamily: "'DM Sans', sans-serif", fontSize: 11, cursor: "pointer", textDecoration: "underline", padding: 0 }}
            >
              ← Modifier
            </button>
            <button
              type="submit"
              disabled={status === "submitting"}
              style={{ ...primaryBtnStyle, padding: "10px 20px" }}
            >
              {status === "submitting" ? "Envoi…" : "Confirmer"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
