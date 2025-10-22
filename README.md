
---

````markdown
# Studio Zero — “Solid” Template (`template-solid-angles`)

A modular **Astro + Tailwind** website template inspired by **HTML5 UP’s Solid State**, rebuilt from the ground up with reusable components, color tokens, and scalable configuration.

This version showcases:

- Swappable **Hero background** (solid color or image)
- Adjustable **overlay opacity** (0–100%)
- **SVG angled dividers** between sections (Safari-safe, fully responsive)
- Modular **Hero**, **Spotlights**, **FeaturesGrid**, and **ContactCTA** sections
- Centralized color, font, and content configuration for fast client rebranding

---

## 🚀 Getting Started

```bash
npm install
npm run dev
````

Then visit **[http://localhost:4321](http://localhost:4321)** (Astro’s default dev server).

---

## 📁 Project Structure

```
/
├── public/
│   └── assets/              # hero/footer images and other public assets
│
├── src/
│   ├── components/
│   │   ├── sections/        # HeroBannerSolid, Spotlights, FeaturesGrid, ContactCTA
│   │   ├── ui/              # AngleEdge, SpotlightItem, etc.
│   │   ├── nav/             # HeaderStandard, HeaderSolidPopup
│   │
│   ├── config/
│   │   ├── site.ts          # business info, images, default settings
│   │   ├── menus.ts
│   │
│   ├── styles/
│   │   └── sections.css     # global section styling & utilities
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro      # example home layout using all sections
│   │
│   └── content/             # spotlight + features data
│
└── package.json
```

---

## 🎨 Theming & Customization

### Colors & Fonts

Edit **`tailwind.config.ts`**:

```ts
theme: {
  extend: {
    colors: {
      primary: '#2563EB',
      accent: '#F59E0B',
      surface: '#FFFFFF',
      alt: '#F8FAFC',
      // add more brand colors as needed
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
}
```

### Site-Wide Config

Update **`src/config/site.ts`**:

```ts
export default {
  name: 'Studio Zero',
  tagline: 'Modern websites for small businesses',
  email: 'hello@studiozero.com',
  phone: '(555) 123-4567',
  address: '123 Main St, New York, NY',
  images: {
    hero: '/assets/hero.jpg', // default hero background
  },
}
```

---

## 🧱 Section Modules

Each section is reusable and configured with props.

| Section             | Purpose                                 | Key Props                                                                                       |
| ------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **HeroBannerSolid** | Top hero with solid or image background | `bgImage`, `bg`, `overlayPercent`, `nextBg`, `anglesTop`, `anglesBottom`, `dirTop`, `dirBottom` |
| **Spotlights**      | Alternating image + text rows           | `items[]`, `imageShape`, `bg`, `nextBg`, `angleTop`, `angleBottom`                              |
| **FeaturesGrid**    | “What’s inside” 3-column card grid      | `items[]`, `bg`, `nextBg`, `angleTop`, `angleBottom`                                            |
| **ContactCTA**      | Two-column contact block (form + info)  | `bg`, `nextBg`, `angleTop`, `angleBottom`                                                       |

---

## 🧩 HeroBannerSolid Props

| Prop                         | Type                                                    | Default            | Description                               |
| ---------------------------- | ------------------------------------------------------- | ------------------ | ----------------------------------------- |
| `title`                      | `string`                                                | —                  | Main heading                              |
| `subtitle`                   | `string`                                                | —                  | Optional subheading                       |
| `bgImage`                    | `string` or `""`                                        | `site.images.hero` | Image path or empty string to disable     |
| `bg`                         | `"surface" \| "alt" \| "primary-tint" \| "accent-tint"` | `"surface"`        | Background color if no image              |
| `overlayPercent`             | `number`                                                | `45`               | Overlay opacity (0–100%) when using image |
| `anglesTop` / `anglesBottom` | `boolean`                                               | `false` / `true`   | Toggle angled dividers                    |
| `dirTop` / `dirBottom`       | `"left"` or `"right"`                                   | `"left"`           | Divider slope direction                   |
| `nextBg`                     | same as `bg`                                            | `"surface"`        | Color fill for bottom divider             |

### Example – Hero with Solid Background

```astro
<HeroBannerSolid
  title="Welcome to Studio Zero"
  subtitle="Simple, modern websites that help small businesses grow."
  bg="primary-tint"
  bgImage=""
  nextBg="surface"
/>
```

### Example – Hero with Image and Overlay

```astro
<HeroBannerSolid
  title="Beautiful Design, Built to Last"
  bgImage="/assets/hero.jpg"
  overlayPercent={60}
  nextBg="surface"
/>
```

---

## 🖼️ Images

* Store all images in `/public/assets/`.
* Update file paths in `site.ts` or per component.

Examples:

```astro
<HeroBannerSolid bgImage="/assets/hero-photo.jpg" />
<Spotlights items={[{ image: '/assets/team1.jpg', title: 'Our Mission', body: '...' }]} />
```

---

## ⚙️ Angled Dividers (SVG)

All section components use `<AngleEdge />` for dividers.

Example:

```astro
<Spotlights
  bg="surface"
  nextBg="alt"
  angleTop={true}
  angleBottom={true}
  dirBottom="right"
/>
```

* `dirBottom="right"` slopes upward (↗)
* `dirBottom="left"` slopes downward (↘)
* `nextBg` color matches the following section
* Works in all browsers — no hairlines like CSS skew

---

## 🧰 Header Options

Choose one per layout:

```astro
import Header from "../components/HeaderStandard.astro";
// import Header from "../components/HeaderSolidPopup.astro";
```

* **HeaderStandard** → sticky top bar with mobile hamburger
* **HeaderSolidPopup** → “Menu” button with centered popup overlay

---

## 🧼 Cloning or Reusing the Template

When starting a new site:

1. **Copy the entire folder** → rename it (`template-solid-angles`, `client-name-site`, etc.)
2. Update `package.json → name`
3. Update repo name on GitHub and remote URL

   ```bash
   git remote set-url origin https://github.com/YOURNAME/new-repo.git
   ```
4. Change `src/config/site.ts` info
5. Adjust colors & fonts in `tailwind.config.ts`
6. Replace `/public/assets/hero.jpg` and any images used in Spotlights/Features
7. Update text content in `src/content/` or directly in `index.astro`

---

## 🌈 Changing Colors, Styles, and Layouts

**Colors:**
All core colors live in `tailwind.config.ts` under `theme.extend.colors`.

**Typography:**
Global fonts come from `fontFamily` in the same file. You can import a Google Font at the top of `src/layouts/BaseLayout.astro`.

**Section spacing or angle height:**
Adjust `padding` utilities in each section (`py-16`, `py-28`, etc.) or tweak `<AngleEdge height={120} />` for steeper/shallower dividers.

---

## 🪶 Client Handoff Guide

This section is for non-technical clients who receive the completed site.

**Changing Text**

* All text (headings, paragraphs, button labels) is in `.astro` files under `src/pages/` or `src/components/sections/`.
* Each section’s text is easy to read and edit directly.
* Example: open `src/components/sections/FeaturesGrid.astro` → change titles or descriptions.

**Changing Images**

* Replace images in `/public/assets/` with new ones using the **same file names**, or update the paths in the code.
* Recommended sizes:

  * Hero: landscape 2000×1000px or larger
  * Spotlights: 800×800px square
  * Cards: 1000×600px

**Colors & Brand Updates**

* Developers can quickly change the site’s look by editing colors in `tailwind.config.ts`.
* Non-developers should ask the Studio Zero team for assistance to keep accessibility and contrast balanced.

**Deployments**

* The site can be hosted on Netlify, Vercel, or GitHub Pages.
* Every time you publish new changes (text, images, or colors), run:

  ```bash
  npm run build
  ```

  and upload the `/dist` folder or push to GitHub if connected to automatic deployment.

---

## 📦 Deployment Commands

```bash
npm run build
npx astro preview
```

Deploy the generated `/dist` folder to your preferred static host.

---

## 🧩 Summary of Key Features

* ✅ Built with **Astro + TailwindCSS**
* ✅ Browser-safe **SVG angled dividers**
* ✅ Adjustable **overlay opacity (0–100%)**
* ✅ Modular section components
* ✅ Centralized site config (`src/config/site.ts`)
* ✅ Fast rebranding for clients

---

**Made by Studio Zero**
*Modern, modular websites for small businesses.*
