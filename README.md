# PURE GLOW by Surya Traders — website

React + Vite website for Surya Traders (PURE GLOW makhana exports).
One page that adapts to desktop, tablet and mobile screens.

## Run it on your computer

1. Install **Node.js (LTS)** from https://nodejs.org (one-time).
2. Open a terminal in this folder and run:

   ```
   npm install
   npm run dev
   ```

3. Open the address it prints (usually http://localhost:5173).

## Build for hosting

```
npm run build
```

This creates a `dist/` folder. Upload it to any static host
(Netlify, Vercel, Cloudflare Pages, Hostinger, GoDaddy, etc.).

## Where to change things

| What | File |
| --- | --- |
| Phone, email, address, GST / IEC, WhatsApp number | `src/data.js` → `contact` |
| Social media links (LinkedIn, Instagram, Facebook) | `src/data.js` → `social` (empty = hidden) |
| Catalogue / company-profile PDF | put the PDF in `public/`, set `catalogueUrl` in `src/data.js` |
| Certificate numbers and scans | `src/data.js` → `certificates` (`number`, `doc`) |
| Founder name / designation / photo | `src/data.js` → `founder` |
| Product category photos | add to `public/images/`, set `image` in `src/data.js` → `categories` |
| Grades, services, steps, markets, flavours, form options | `src/data.js` |
| Colours, fonts, spacing, mobile layout | `src/styles.css` |
| Images (logo, hero, QR, map, banner) | `public/images/` |

## Placeholders still to fill in

- Founder designation: `[Designation]`
- APEDA, FSSAI, MSME (Udyam), DGFT and ICEGATE registration numbers
- Social media URLs
- Catalogue PDF
- Photos for Raw, Handpicked and Flavoured Makhana categories

## How the inquiry form works

There is no server. When a buyer submits the form, WhatsApp opens with the
whole inquiry already written to +91 98355 78540, or their email app opens
if they press **Send by Email**. They just press send.

To receive submissions straight to your inbox without the buyer's email
app, connect the form to a free form service (Formspree, Web3Forms)
inside `src/components/Contact.jsx`.
