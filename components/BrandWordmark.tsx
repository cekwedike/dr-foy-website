import type { CSSProperties } from "react";

type BrandWordmarkProps = {
  className?: string;
  style?: CSSProperties;
};

/** Script logotype — uses `--font-wordmark` (Mr Dafoe). Text: Dr Tochukwu MacFoy */
export default function BrandWordmark({ className = "", style }: BrandWordmarkProps) {
  return (
    <span
      className={`font-wordmark leading-none tracking-tight text-ink ${className}`}
      style={style}
    >
      Dr Tochukwu MacFoy
    </span>
  );
}
