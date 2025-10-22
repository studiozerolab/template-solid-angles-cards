const site = {
  name: "Studio Zero",
  logoAlt: "Studio Zero",
  tagline: "Modern, modular templates for real-world small businesses.",
  email: "hello@example.com",
  phone: "(555) 555-1212",
  address: "123 Main St, Anytown, USA",
  socials: [
    { label: "Twitter", href: "https://twitter.com/", icon: "𝕏" },
    { label: "GitHub", href: "https://github.com/", icon: "{}" },
  ],
  theme: {
    primary: "#2563EB",
    accent: "#F59E0B",
    surface: "#FFFFFF",
    surfaceAlt: "#F8FAFC",
    text: "#0F172A",
    muted: "#475569",
    line: "#E2E8F0",
  },
  images: {
    hero: "https://picsum.photos/1200/800",
    // hero: "/assets/hero.jpg",
    footer: "/assets/footer-texture.jpg",
  },
  defaults: {
    headerVariant: "standard", // "standard" | "solidPopup"
    angles: "bottom",          // "top" | "bottom" | "both" | "none"
    imageShape: "circle",      // "circle" | "square"
    sectionBg: "surface",      // "surface" | "alt" | "primary-tint" | "accent-tint"
  },
};

export default site;
