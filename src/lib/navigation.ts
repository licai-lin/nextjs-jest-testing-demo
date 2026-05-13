export type SiteLink = {
  href: string;
  label: string;
};

export const noteHrefPrefix = "/notes/note?id=";

export const headerNavLinks: SiteLink[] = [
  { href: "/", label: "Home" },
  { href: "/counter", label: "Counter" },
  { href: "/users", label: "User" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export const homeRouteLinks: SiteLink[] = [
  { href: "/counter", label: "Counter" },
];

export const footerQuickLinks: SiteLink[] = [
  { href: "/", label: "Home" },
  { href: "/register", label: "Register" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export const footerLegalLinks: SiteLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export const adminLinks: SiteLink[] = [
  { href: "/", label: "Home" },
];
