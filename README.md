# 💎 Gem Store

**The Official PWA Marketplace for Gem Labs**

![Version](https://img.shields.io/badge/version-1.7.0-black)
![Type](https://img.shields.io/badge/type-PWA_Marketplace-blue)
![Status](https://img.shields.io/badge/status-live-success)

**Gem Store** is a lightweight, minimalist application directory designed to unify the Gem Labs ecosystem. It functions as a Progressive Web App (PWA), allowing users to browse, launch, and install all Gem Labs utilities from a single, native-like interface.

🔗 **Live Demo:** [https://thegem001.github.io/Gem-PWA-Store/](https://thegem001.github.io/Gem-PWA-Store/)

---

## 🚀 Features

### 🛍️ Unified Ecosystem
* **Central Hub:** Access all flagship tools like *Splitify*, *Soul Calculator*, and *Status Maker* in one place.
* **Instant Launch:** Open apps directly within the browser or install them to your device.
* **Smart Search:** Real-time filtering by app name or category (e.g., "Utility", "Social").

### 📱 PWA Experience
* **Installable:** Add "Gem Store" to your home screen for a native app experience.
* **Offline Ready:** Powered by a custom Service Worker (`sw.js`) that caches assets and data for offline access.
* **Touch Optimized:** Includes swipe gestures for the featured carousel and smooth, native-like transitions.

### 🎨 Gem Mono Design
* **Glassmorphism:** Features translucent headers and modal sheets for a modern, premium feel.
* **Minimalist UI:** Built with a stark Black & White palette (`--gem-black`, `#FFFFFF`) focusing purely on content.
* **Micro-Interactions:** Active states, shimmers, and smooth scaling animations for a tactile feel.

---

## 📂 App Catalog

The store dynamically fetches its catalog from `apps.json`. Current listings include:

| App | Category | Status | Description |
| :--- | :--- | :--- | :--- |
| **Splitify** | Utility | 🟢 Live | Offline finance ledger for shared expenses. |
| **Soul Calculator** | Lifestyle | ✨ New | Spiritual & numerological profiling engine. |
| **CGPA Calculator** | Education | 🟠 Beta | Academic tracker for IUB students. |
| **Status Maker** | Social | ✨ New | Social media mockup generator. |
| **Quotes** | Lifestyle | 🟢 Live | Minimalist daily inspiration. |

---

## 🛠️ Tech Stack

* **Core:** HTML5, Vanilla JavaScript (ES6+)
* **Styling:** Tailwind CSS (CDN)
* **Icons:** Lucide Icons (CDN)
* **Data:** JSON (`apps.json`, `slides.json`)
* **PWA:** Web Manifest & Service Worker Caching

---

## ⚙️ Local Development

To run the store locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/thegem001/gem-pwa-store.git](https://github.com/thegem001/gem-pwa-store.git)
    ```
2.  **Serve the files:**
    Because this project uses `fetch()` to load JSON data and a Service Worker, it **must** be run on a local server (not just double-clicking index.html).
    * *VS Code:* Right-click `index.html` -> "Open with Live Server".
    * *Python:* `python -m http.server 8000`

---

## 👥 Authors

* **Saqib Zahid** (Founder, Gem Labs)

---

*Gem Store v1.7.0 (Labs Edition)*