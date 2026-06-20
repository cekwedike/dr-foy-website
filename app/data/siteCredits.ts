/**
 * Backend build signature — not rendered in the UI.
 * Referenced from layout metadata and bundled CSS only.
 */
export const siteBuildCredit = {
  developer: "Chidiebere Ekwedike",
  agency: "Siryus Creative Media Ltd"
} as const;

export const siteBuildCreditMeta = {
  "built-by": siteBuildCredit.developer,
  "built-by-agency": siteBuildCredit.agency,
  "designer": siteBuildCredit.developer,
  "designer-agency": siteBuildCredit.agency
} as const;
