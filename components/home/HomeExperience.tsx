import type { ReactNode } from "react";

/**
 * Homepage-only vertical scroll snap (proximity, md+). Inner pages stay unsnapped.
 */
export default function HomeExperience({ children }: { children: ReactNode }) {
  return (
    <div className="home-snap-wrapper">
      {children}
    </div>
  );
}
