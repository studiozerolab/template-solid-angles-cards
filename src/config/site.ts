const site = {
  name: "Studio Zero",
  logoAlt: "Studio Zero",
  tagline: "Modern, modular websites built for small businesses and independent professionals. Clean design, clear messaging, and lasting results.",
  email: "info@studiozerolab.com",
  phone: "(631) 223-8108",
  address: "Huntington, New York",
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
    // hero: "https://picsum.photos/1200/800",
    hero: "/assets/rocks-1920x1280.jpg",
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
