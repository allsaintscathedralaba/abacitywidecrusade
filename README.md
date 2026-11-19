# ABA CITYWIDE CRUSADE 2026 — Modern One-Page Landing Website

![Aba Citywide Crusade 2026 Flyer](public/assets/crusade-flyer.jpg)

A clean, modern, minimal, responsive, single-page landing website for the **ABA CITYWIDE CRUSADE 2026**, organized by the **Diocese of Aba Ngwa North (Anglican Communion)**.

The website is crafted as a direct digital extension of the official crusade flyer, reproducing its exact color palette, typography hierarchy, spiritual atmosphere, and editorial layout without unnecessary visual clutter or container boxes.

---

## 📅 Official Event Information

| Detail | Information |
| :--- | :--- |
| **Event Name** | **ABA CITYWIDE CRUSADE 2026** |
| **Organizing Ministry** | **Diocese of Aba Ngwa North (Anglican Communion)** |
| **Theme** | **THINK BEFORE YOU BELIEVE** |
| **Scripture Reference** | **Acts 17:11** |
| **Event Dates** | **2nd to 5th December 2026** |
| **Daily Crusade Time** | **4:00 PM Daily (WAT)** |
| **Crusade Venue** | **Ngwa High School Playground, Aba, Abia State** |
| **Guest Speaker** | **The Rt. Rev. Dr. Iyke J. Egbuonu** *(Bishop, Diocese of Oji River)* |
| **Host** | **The Rt. Rev. Nathan C. O. Kanu JP, Ph.D.** *(Bishop, Diocese of Aba Ngwa North)* |
| **Special Programme** | **Ministers Conference** |
| **Ministers Conf. Date** | **Saturday, 5th December 2026** |
| **Ministers Conf. Time** | **9:00 AM (WAT)** |
| **Official Registration** | [EventRally Registration Portal](https://www.geteventrally.com/events/bc7509fd-31fb-4ec1-881a-7e07f1a7ad8b) |

---

## 🎨 Visual Identity & Design Direction

- **Exact Color Palette from Flyer:**
  - **Deep Midnight Navy:** `#060d1f` & `#0a1738` *(Flyer stadium night atmosphere)*
  - **Sunset Warm Orange:** `#ea580c` & `#d9531e` *(Flyer accent and date badge color)*
  - **Royal Anglican Blue:** `#1e3a8a` & `#1d4ed8` *(Flyer time & venue badge color)*
  - **Clean Slate / Crisp Off-White:** `#f8fafc` & `#ffffff` *(High-contrast editorial reading)*
- **Typography:**
  - **Roboto font applied throughout** in clean weights (300, 400, 500, 700, 900).
- **Minimal, Unboxed Layout:**
  - Avoided unnecessary cards, heavy shadows, and rounded container boxes.
  - Generous spacing, bold expressive typography, and continuous visual storytelling.
- **Scroll Reveal Animations:**
  - Smooth upward entrance and subtle fade-ins using Intersection Observer and CSS transitions.
  - Respects `prefers-reduced-motion` for accessibility.

---

## 🏛️ Website Structure

1. **Navigation:** Simple, minimal header with Diocese crest, smooth scroll links, and `REGISTER NOW` CTA.
2. **Section A (Hero):** Bold event branding, theme *"THINK BEFORE YOU BELIEVE"* (Acts 17:11), prominent dates, time, venue, and primary CTA.
3. **Section B (About):** Vision, purpose, and spiritual significance presented with editorial elegance and open Bible imagery.
4. **Section C (What to Expect):** Four key spiritual pillars (*Worship*, *Word*, *Prayer*, *Encounter*) presented as clean typographic elements (01–04) rather than boxed cards.
5. **Section D (Event Details):** Large, prominent typographic hierarchy for date, daily time, ministers conference, venue with Google Maps link, and authentic episcopal portraits of Dr. Iyke Egbuonu and Bishop Nathan Kanu.
6. **Section E (Registration / Participation):** Clear registration call-to-action routing to EventRally with client-side validated RSVP interest form and WhatsApp invitation.
7. **Section F (Final Call to Action):** Impactful closing invitation: *"YOUR CITY. ONE ALTAR. ONE ENCOUNTER."*
8. **Section G (Footer):** Minimal, dignified footer with official diocesan attribution and quick links.

---

## 💻 Tech Stack & Local Setup

- **Stack:** React 18, TypeScript, Vite 5, Tailwind CSS 3, Lucide React
- **Typography:** Roboto (Google Fonts)

### Run Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Accessible at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Generates production-ready static assets in `dist/`.

---

© 2026 Diocese of Aba Ngwa North (Anglican Communion). All rights reserved.
