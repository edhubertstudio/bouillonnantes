"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/pourquoi",        label: "Pourquoi" },
  { href: "/notre-gamme",     label: "Notre Gamme" },
  { href: "/ou-nous-trouver", label: "Où Nous Trouver" },
  { href: "/recettes",        label: "Recettes" },
  { href: "/notre-histoire",  label: "Notre Histoire" },
];

export function SiteNav() {
  const [scrolled, setScrolled]     = useState(false);
  const [open, setOpen]             = useState(false);
  const [isMobile, setIsMobile]     = useState(false);
  const pathname                    = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (!e.matches) setOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigation principale"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s, box-shadow 0.3s",
          background: scrolled ? "rgba(14,7,2,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(255,144,33,0.12)" : "none",
        }}
      >
        {/* Animated amber underline drawn left→right when scroll kicks in */}
        {scrolled && (
          <div
            className="nav-line"
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(255,144,33,0.45)",
            }}
          />
        )}

        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "'Cormorant Garant', serif",
              color: "#fdf6ee",
              fontSize: 22,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Bouillonnantes
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              {links.map((l) => {
                const isActive = pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={isActive ? "nav-link-active" : undefined}
                    style={{
                      color: isActive ? "#fdf6ee" : "rgba(253,246,238,0.65)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      position: "relative",
                      paddingBottom: 4,
                    }}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          )}

          {/* CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {!isMobile && (
              <Link
                href="/devenir-revendeur"
                style={{
                  background: "#ff9021",
                  color: "#180c04",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  padding: "10px 22px",
                  textDecoration: "none",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                Devenir Revendeur
              </Link>
            )}
            {isMobile && (
              <button
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                }}
              >
                <span style={{ display: "block", width: 22, height: 2, background: "#fdf6ee", transition: "transform 0.25s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
                <span style={{ display: "block", width: 22, height: 2, background: "#fdf6ee", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
                <span style={{ display: "block", width: 22, height: 2, background: "#fdf6ee", transition: "transform 0.25s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobile && open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "#0e0702",
            display: "flex",
            flexDirection: "column",
            padding: "96px 32px 40px",
          }}
        >
          {links.map((l) => {
            const isActive = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: isActive ? "#ff9021" : "#fdf6ee",
                  fontFamily: "'Cormorant Garant', serif",
                  fontSize: 28,
                  fontWeight: 600,
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,144,33,0.1)",
                  letterSpacing: "0.01em",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/devenir-revendeur"
            onClick={() => setOpen(false)}
            style={{
              marginTop: "auto",
              background: "#ff9021",
              color: "#180c04",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              padding: "20px",
              textDecoration: "none",
              textAlign: "center",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            Devenir Revendeur
          </Link>
        </div>
      )}
    </>
  );
}
