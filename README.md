# 🌾 Naam Tamilar Katchi Political Portal

A modern, high-performance, and responsive 12-page web portal built for **Naam Tamilar Katchi**. This platform is designed to connect the party with its supporters, showcase leadership, and provide real-time updates on political activities across Tamil Nadu.

![Project Preview](https://images.unsplash.com/photo-1541872511475-731ccadd7291?q=80&w=1200&auto=format&fit=crop)

## 🚀 Key Features

- **📍 Interactive District Hub**: A dynamic search-enabled page for all 38 Tamil Nadu districts. Includes:
  - **Spelling Suggestion Engine**: Built-in Levenshtein Distance algorithm to suggest correct district names.
  - **Live Geolocation**: Integrated Google Maps that automatically centers on the selected district or leader's location.
- **📰 Live News Aggregator**: Real-time political news updates fetched directly from Google News RSS feeds using a dynamic proxy.
- **🗳️ Election Manifesto 2026**: A comprehensive, icon-driven presentation of the 8 core pillars of the party's vision.
- **🤝 Membership System**: Secure user onboarding via **Firebase Authentication** (Google Sign-In) and Firestore database integration.
- **📱 Social Media Hub**: Unified dashboard featuring live-linked feeds for YouTube, X (Twitter), Facebook, and Instagram.
- **🕰️ Political Journey**: An interactive timeline showcasing the historical milestones and leadership of the movement.

## 🛠️ Technology Stack

- **Frontend**: [React.js](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Backend/DB**: [Firebase](https://firebase.google.com/) (Auth, Firestore)
- **Styling**: Vanilla CSS (Custom Red/Black/White Palette)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome)
- **Maps**: Google Maps Embed API

## 📦 Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   Create a `.env` or update `src/firebase.js` with your specific Firebase project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     // ... other fields
   };
   ```

4. **Run Locally**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

## 🏗️ Folder Structure

```text
├── public/                 # Static assets (Images, Logos)
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, Card, etc.)
│   ├── contexts/           # Auth and State contexts
│   ├── pages/              # 12 Core Page components
│   ├── App.jsx             # Main Routing and Logic
│   └── main.jsx            # Entry point
├── netlify.toml            # Deployment config for Netlify
└── vercel.json             # Deployment config for Vercel
```

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

*Made with ❤️ for a better Tamil Nadu.*
