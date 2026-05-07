"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldError {
  nom?: string;
  boutique?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldError>({});
  const [values, setValues] = useState({
    nom: "",
    boutique: "",
    email: "",
    message: "",
  });

  function validate(): FieldError {
    const e: FieldError = {};
    if (!values.nom.trim()) e.nom = "Votre nom est requis.";
    if (!values.boutique.trim()) e.boutique = "Le nom de votre boutique est requis.";
    if (!values.email.trim()) {
      e.email = "Votre email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = "L'adresse email n'est pas valide.";
    }
    if (!values.message.trim()) e.message = "Votre message est requis.";
    return e;
  }

  function handleBlur(field: keyof FieldError) {
    const e = validate();
    setErrors((prev) => ({ ...prev, [field]: e[field] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setState("submitting");
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            nom: values.nom,
            "nom-boutique": values.boutique,
            email: values.email,
            message: values.message,
          }),
        }
      );
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    display: "block",
    width: "100%",
    background: "rgba(253,246,238,0.04)",
    border: `1px solid ${hasError ? "#ff9021" : "rgba(253,246,238,0.15)"}`,
    color: "#fdf6ee",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    padding: "12px 14px",
    outline: "none",
    boxSizing: "border-box",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#fdf6ee",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    marginBottom: 6,
  };

  const errorStyle: React.CSSProperties = {
    color: "#ff9021",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    marginTop: 4,
  };

  if (state === "success") {
    return (
      <div style={{ padding: "40px 0", textAlign: "center" }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garant', serif",
            color: "#fdf6ee",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Message envoyé
        </h3>
        <p
          style={{
            color: "rgba(253,246,238,0.6)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          Merci pour votre intérêt. Léa ou Claire vous répondra dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {state === "error" && (
        <p
          style={{
            color: "#ff9021",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            padding: "12px 16px",
            border: "1px solid rgba(255,144,33,0.3)",
            background: "rgba(255,144,33,0.05)",
          }}
        >
          Une erreur est survenue. Vérifiez votre connexion et réessayez.
        </p>
      )}

      <div>
        <label htmlFor="nom" style={labelStyle}>Nom</label>
        <input
          id="nom"
          type="text"
          value={values.nom}
          placeholder="ex. Claire Martin"
          onChange={(e) => setValues((v) => ({ ...v, nom: e.target.value }))}
          onBlur={() => handleBlur("nom")}
          aria-describedby={errors.nom ? "nom-error" : undefined}
          style={inputStyle(!!errors.nom)}
        />
        {errors.nom && <p id="nom-error" style={errorStyle}>{errors.nom}</p>}
      </div>

      <div>
        <label htmlFor="boutique" style={labelStyle}>Nom de la boutique</label>
        <input
          id="boutique"
          type="text"
          value={values.boutique}
          placeholder="ex. Épicerie Madame"
          onChange={(e) => setValues((v) => ({ ...v, boutique: e.target.value }))}
          onBlur={() => handleBlur("boutique")}
          aria-describedby={errors.boutique ? "boutique-error" : undefined}
          style={inputStyle(!!errors.boutique)}
        />
        {errors.boutique && <p id="boutique-error" style={errorStyle}>{errors.boutique}</p>}
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          id="email"
          type="email"
          value={values.email}
          placeholder="ex. claire@epicerie.fr"
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          onBlur={() => handleBlur("email")}
          aria-describedby={errors.email ? "email-error" : undefined}
          style={inputStyle(!!errors.email)}
        />
        {errors.email && <p id="email-error" style={errorStyle}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          placeholder="Parlez-nous de votre boutique et de votre intérêt pour nos produits."
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          onBlur={() => handleBlur("message")}
          aria-describedby={errors.message ? "message-error" : undefined}
          style={{ ...inputStyle(!!errors.message), resize: "vertical" }}
        />
        {errors.message && <p id="message-error" style={errorStyle}>{errors.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          disabled={state === "submitting"}
          style={{
            background: state === "submitting" ? "rgba(255,144,33,0.6)" : "#ff9021",
            color: "#180c04",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            padding: "16px 36px",
            border: "none",
            cursor: state === "submitting" ? "not-allowed" : "pointer",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            width: "100%",
          }}
        >
          {state === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
        <p
          style={{
            color: "rgba(253,246,238,0.65)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            marginTop: 10,
            textAlign: "center",
          }}
        >
          En soumettant ce formulaire, vous acceptez notre{" "}
          <Link
            href="/mentions-legales"
            style={{ color: "rgba(253,246,238,0.6)", textDecoration: "underline" }}
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
