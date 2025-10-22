export type NavItem = { label: string; href: string };


// Single source of truth for all nav links (desktop + mobile)
export const mainNav: NavItem[] = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Features", href: "#features" },
{ label: "Contact", href: "#contact" },
];