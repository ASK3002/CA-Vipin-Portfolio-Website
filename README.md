# V A SINGH & CO – Chartered Accountants Website

A modern premium finance website built with React, Vite, Tailwind CSS, React Router DOM, Framer Motion, and EmailJS.

## Project Structure

- `src/App.jsx` — application routes and page transitions
- `src/main.jsx` — React entry point
- `src/index.css` — Tailwind global styles and custom themes
- `src/components/` — reusable UI components
- `src/pages/` — Home, Services, About, Contact pages
- `src/config/emailjs.js` — EmailJS configuration placeholders
- `src/routes/` — route metadata

## Manual Configuration Required

1. **EmailJS Setup**
   - Create an EmailJS account at https://www.emailjs.com
   - Add an email service and connect `cavipinsingh2025@gmail.com`
   - Create an email template with fields: `from_name`, `from_email`, `phone`, `service`, `message`
   - Copy your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`
   - Paste them into `src/config/emailjs.js`

2. **Google Map Embed**
   - Generate a Google Maps embed link from Google Maps for the firm address
   - Replace the `src` URL inside the iframe in `src/pages/Contact.jsx`

3. **WhatsApp Button Number**
   - Update the WhatsApp URL in `src/components/WhatsAppButton.jsx`
   - Use the full country code format, for example: `918652119165`

4. **Logo / Brand Image**
   - Replace `src/assets/logo.svg` with the final logo image
   - Recommended size: ~200x200px
   - Supported formats: `svg`, `png`, `jpg`

5. **Deployment Guide**
   - Run `npm install`
   - Run `npm run build`
   - Deploy `dist/` to Netlify by drag-and-drop or GitHub integration
   - Connect a custom domain from Netlify dashboard later

6. **Contact Details Update**
   - Phone, email, and address are stored in `src/pages/Contact.jsx` and `src/components/Footer.jsx`

7. **Environment Variables**
   - No `.env` file is currently required
   - EmailJS credentials are stored in `src/config/emailjs.js`

8. **SEO / Meta Tags**
   - Update the page title and meta description in `index.html`
   - Replace `favicon.svg` with a custom brand icon if desired

9. **Performance & Responsiveness**
   - The website is built to be mobile responsive and optimized for Netlify deployment
   - It uses smooth page transitions and modern SPA routing

10. **Final Delivery Notes**
   - Project includes a premium finance brand experience with animated sections, service pages, contact form, and responsive layout
   - Technologies: React, Vite, Tailwind CSS, React Router DOM, Framer Motion, EmailJS
   - Future improvements: improved SEO metadata, dynamic service content, advanced analytics tracking
