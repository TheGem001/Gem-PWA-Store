Gem PWA Store

A centralized Progressive Web App (PWA) store to host and distribute all applications developed by Gem Labs. This store provides a unified, app-store-like interface to access our latest utilities, productivity tools, and lifestyle apps.

🌐 Access the Store: https://github.com/TheGem001/Gem-PWA-Store

📱 Available Applications

The following applications are currently live and available in the store:

Application

Category

Version

Description

Splitify

Utility

1.3.1

The ultimate tool for bill splitting and group expense management.

CGPA Calculator

Education

1.0

Calculate your Semester and Cumulative GPA instantly.

Status Maker

Social

1.0

Create beautiful statuses and updates for social profiles.

Soul Calculator

Lifestyle

1.0

A unique calculator for personal insights.

Quotes

Lifestyle

1.0

A minimalist collection of inspiring quotes.

🚀 Features

PWA Ready: Install the store itself as an app on your home screen.

Unified Design: Consistent "Gem Mono" design language across the interface.

Instant Updates: New apps appear automatically when pushed to the repository.

Offline Capable: Browsing the catalog works offline after the first visit.

🛠️ Development

To add a new app to the store, simply update the apps.json file in the root directory:

{
  "id": "app-id",
  "name": "App Name",
  "category": "Category",
  "version": "1.0",
  "status": "Live",
  "description": "Short description.",
  "icon": "assets/icon.svg", 
  "url": "[https://your-github-username.github.io/repo-name/](https://your-github-username.github.io/repo-name/)"
}


Note: You can use Lucide icon names (e.g., "heart", "calculator") in the icon field if you do not have a custom SVG asset.

Gem Labs — Building high-performance software for the next generation of the web.