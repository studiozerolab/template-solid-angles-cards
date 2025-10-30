const site = {
  name: "Harbor & Co.",
  logoAlt: "Harbor & Co.",
  tagline: "Let's bring your business online. Choose a package, send your content, and we'll handle the rest.",   // Footer
  email: "info@studiozerolab.com",
  phone: "(631) 223-8108",
  address: "Huntington, New York",
  socials: [
    { label: "X", href: "https://x.com/", icon: "/assets/icons/x-logo-black.png" },
    { label: "Instagram", href: "https://instagram.com/", icon: "/assets/icons/Instagram_Black.svg" },
    { label: "Facebook", href: "https://facebook.com/", icon: "/assets/icons/Facebook.svg" },
  ],
  theme: {
    // (for metadata, meta-tags, analytics — doesn’t affect styling.)
    primary: "#009688",
    accent: "#f6ede3",
    surface: "#ffffff",
    surfaceAlt: "#f8f9fb",
    text: "#222222",
    muted: "#555555",
    line: "#d1d5db",
  },
  images: {
    // hero: "https://picsum.photos/1200/800",
    hero: "/assets/hero.jpg",
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
