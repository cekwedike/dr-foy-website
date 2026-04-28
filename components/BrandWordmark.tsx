import type { CSSProperties } from "react";

type BrandWordmarkProps = {
  className?: string;
  style?: CSSProperties;
};

/** Signature logotype — uses `--font-wordmark` (Ephesis). Text: Dr Tochukwu MacFoy */
export default function BrandWordmark({ className = "", style }: BrandWordmarkProps) {
  return (
    <span
      className={`font-wordmark leading-none tracking-[0.01em] text-ink [font-feature-settings:'liga'_1,'calt'_1] ${className}`}
      style={style}
    >
      Dr Tochukwu MacFoy
    </span>
  );
}
