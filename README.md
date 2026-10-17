# Digital business card

A one-page personal card that lives on a URL and in a QR code: contacts, skills, "save to phone"
as a vCard, share sheet, light/dark theme. Everything is driven by one config file, so it works
as a template for anyone.

## Features

- Hero with avatar, title and contact buttons (phone, e-mail, Telegram, WhatsApp, Instagram, GitHub)
- QR code of the page itself, generated client-side (`qrcode.react`)
- Download contact as `.vcf` (vCard) — opens straight in the phone's contacts app
- Web Share API with clipboard fallback
- Theme toggle that respects `prefers-color-scheme`, scroll progress, back-to-top, particle background
- Toasts for copy/share feedback

## Make it yours

Edit `src/config/config.js` — name, title, about, phone, links, skills — and replace
`src/assets/avatar.jpg`. Nothing else needs changing.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

React 18 + Vite, `react-icons`, `qrcode.react`. No backend.
