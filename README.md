# 🌍 Xplora - Discover Your Next Adventure

**Xplora** is a premium, modern travel and tourism platform designed to help users explore breathtaking destinations, access detailed travel information, and manage membership plans. The project focuses on providing a luxury user experience with smooth performance, immersive visuals, and efficient data handling.

🚀 **Live Demo:** [https://xplora-s.vercel.app](https://xplora-s.vercel.app)

---
## 📸 Image Preview
To add an image preview in your README.md so that it looks professional on GitHub, you can use several methods. Since you are using it for your Xplora project, here are the best ways to do it:

1. The Standard Markdown Method (Simple)
Place the image file in your repository (e.g., in a folder named public or screenshots) and use this code:

Markdown

![Xplora Preview](./src/assets/Xplora.png)

## ✨ Key Features

* **Smart Debounced Search:** Powered by a custom `useDebounce` hook to provide real-time, high-performance destination filtering without lag.
* **Optimized Data Fetching:** Integrated with **Axios** and **TanStack Query (React Query)** for superior caching, background refetching, and state management.
* **Dynamic Destination Grid:** Features memory-optimized rendering and automatic animation resets when search terms are cleared.
* **Secure Authentication:** Integrated with Firebase for robust Google Login and Email/Password-based authentication.
* **Immersive Animations:** Utilizes `Framer Motion` for premium scroll-reveal effects, staggered entrance animations, and smooth transitions.
* **Pro Explorer Profiles:** Personalized dashboard featuring user-specific badges and profile management.

---

## 🛠 Tech Stack

**Frontend:**
* **React (Vite):** Core library for building the UI.
* **TanStack Query (React Query):** For server-state management and caching.
* **Axios:** For structured and intercepted HTTP requests.
* **Tailwind CSS:** For custom, utility-first styling.
* **Framer Motion:** For advanced motion graphics and layout transitions.
* **Lucide React & React Icons:** For clean, professional iconography.

**Backend & Services:**
* **Firebase:** Handles Authentication and hosting services.
* **React Context API:** Manages global UI state (search terms, theme, etc.).
* **React Toastify:** Provides elegant user feedback and notifications.

---


## 📂 Project Structure

```text
Xplora/
├── public/                # Static assets like images and logos
├── src/
│   ├── api/               # Axios instance and API service definitions
│   ├── assets/            # Global styles and images
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Shared components (Loading, Error, etc.)
│   │   └── layout/        # Layout components (Header, Footer)
│   ├── contexts/          # React Context API for Global State
│   ├── firebaseConfig/    # Firebase initialization and setup
│   ├── hooks/             # Custom hooks (useAuth, usePlace, useDebounce)
│   ├── pages/             # Page components (Home, Destinations, etc.)
│   ├── utils/             # Helper functions and constants
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point with QueryClientProvider
├── .env.local             # Environment variables
├── package.json           # Dependencies and scripts
└── tailwind.config.js     # Tailwind configuration
```

### 1. Clone the Repository
```bash
git clone [https://github.com/peyalhasan/Xplora.git](https://github.com/peyalhasan/Xplora.git)
cd Xplora