import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "text";
}

export function Button({ variant, children, className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-amber text-broth hover:bg-amber-dark",
    secondary: "bg-transparent border border-amber text-cream hover:bg-amber/10",
    text: "bg-transparent text-cream border-b border-transparent hover:border-amber px-0",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
