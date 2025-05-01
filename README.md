
---


# 🏛️ RAD Studio – Digital Architecture for Creative Spaces

> *"Design is intelligence made visible."*  
> — Alina Wheeler

Welcome to the **RAD Studio Website**, a modern architectural web presence built for a creative consultancy firm focused on spatial innovation—residential, commercial, and public. This site isn't just code—it's structure, composition, rhythm, and experience.

Crafted with **HTML**, **jQuery**, and **Tailwind CSS**, this digital blueprint merges function and form: responsive layouts, calm visual language, and modular design, all tailored to elevate the user journey.

---

## 🧭 Architectural Blueprint

### 📐 Technologies
- **Tailwind CSS** – Utility-first styling with a clean, grid-based layout.
- **HTML** – Semantically structured elements for accessibility and clarity.
- **jQuery** – Lightweight DOM manipulation and dynamic loading.

---

## ✨ Features Overview

### 🧱 Responsive Architecture
- Mobile-first, fluid grids ensure seamless adaptation across all viewports.
- Adaptive components (header, portfolio, Instagram sections) rearranged per screen breakpoints.
- Mobile menu transforms into immersive fullscreen navigation.

### 🎨 Aesthetic System
- **Color Scheme**: Crisp white (`bg-white`) canvas with teal accenting (`#4bcdc9`)—a calming, modernist palette.
- **Typography**: `Montserrat` font evokes precision and structure.
- **Motion & Atmosphere**: Subtle animations—fade-ins, slide-ups, and image scale transitions—create rhythm and visual interest.

### 🧩 Modular Framework
- **Components**: Each page is a composition of reusable parts:
  - `header.html`, `footer.html`
  - `portfolio-item.html`, `instagram-section.html`
- **Component Loader**: `components.js` dynamically injects HTML components and applies initial animations.

### 🖼️ Portfolio Grid System
- Uniform tile system using `h-64` with black hover overlays (`rgba(0,0,0,0.6)`).
- Grid-based spatial logic to ensure aesthetic harmony and alignment.
- Instagram-styled gallery designed with rhythm and balance.

### 🔗 Navigation & Flow
- Fixed header with **frosted glass** effect (`bg-white/95 backdrop-blur-sm`) and animated nav underline.
- Initial load transitions for header and body content enhance flow.
- Smooth, non-disruptive transitions between pages via fade effects.

### 📍 Contact & Location
- Contact form (HTML only, ready for integration).
- Embedded Google Maps with styled container (`rounded-lg border-gray-100`).
- Modular layout adaptable to any contact system.

---

## 🗂️ Folder Structure

```
RAD-studio/
├── index.html                # Landing page
├── contact.html              # Contact page
├── components/
│   ├── header.html
│   ├── footer.html
│   ├── portfolio-item.html
│   └── instagram-section.html
├── js/
│   └── components.js         # Component loader and animation logic
├── README.md
└── LICENSE
```

---

## ⚙️ Getting Started

### 🔧 Requirements
- Web browser (Chrome, Firefox, Safari)
- Local server (e.g., Python, Live Server extension, or Node)

### 🚀 Quick Setup

```bash
git clone https://github.com/Dikarahmanm/radgroup.git
cd RAD-studio
```

Run with Python:
```bash
python -m http.server 8000
```
Open in browser: `http://localhost:8000`

Or use VS Code:
- Open `index.html`
- Right-click → **Open with Live Server**

Or with Node.js:
```bash
npm install -g live-server
live-server
```

---

## 🎛️ Customization Guide

| Element | File | How to Customize |
|--------|------|------------------|
| Header | `header.html` | Change logo, tagline, nav labels |
| Portfolio | `components.js` | Modify or add image data |
| Contact | `contact.html` | Update form fields, embed map |
| Styling | Tailwind classes in HTML | Adjust spacing, colors, transitions |
| Animation | `components.js` | Tweak `.initial-load-*` durations |

---

## 📦 Dependencies

- [Tailwind CSS](https://cdn.tailwindcss.com)
- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css)
- [Google Fonts – Montserrat](https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap)
- [jQuery 3.6.0](https://code.jquery.com/jquery-3.6.0.min.js)

---

## 🚀 Production Optimization

- Self-host CDN assets to improve latency
- Compress portfolio images (JPEG/WebP)
- Use `<link rel="preload">` for `components.js`
- Minify HTML, CSS, and JS

---

## 📄 License

Licensed under the MIT License.  
See [`LICENSE`](./LICENSE) for full terms.

---

## 🙌 Contributing

Have a suggestion or improvement?  
Open an issue or submit a pull request. Collaboration is welcomed!

