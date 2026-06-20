"use client";

import { useCallback, useState } from "react";

type RevealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  className?: string;
};

export default function RevealButton({
  label,
  className,
  type = "button",
  onPointerDown,
  onPointerUp,
  onBlur,
  ...props
}: RevealButtonProps) {
  const [lit, setLit] = useState(false);
  const padded = `\u00a0${label}\u00a0`;

  const reveal = useCallback(() => setLit(true), []);
  const hide = useCallback(() => setLit(false), []);

  return (
    <button
      type={type}
      className={["nav-reveal-btn", lit ? "nav-reveal-btn--lit" : "", className].filter(Boolean).join(" ")}
      onMouseEnter={reveal}
      onMouseLeave={hide}
      onFocus={reveal}
      onBlur={(event) => {
        hide();
        onBlur?.(event);
      }}
      onPointerDown={(event) => {
        if (event.pointerType === "touch") {
          reveal();
        }
        onPointerDown?.(event);
      }}
      onPointerUp={(event) => {
        if (event.pointerType === "touch") {
          window.setTimeout(hide, 650);
        }
        onPointerUp?.(event);
      }}
      {...props}
    >
      <span className="nav-reveal-btn__actual">{padded}</span>
      <span aria-hidden="true" className="nav-reveal-btn__hover">
        {padded}
      </span>
    </button>
  );
}
