# Frontend Setup Guide

## 📌 Introduction
This guide provides step-by-step instructions to set up and run the frontend of the challenge. The frontend is built using **React 19**, **Redux Toolkit**, **React Router**, and **Framer Motion** for smooth animations.

---

## 📦 Requirements
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **npm** or **yarn**
- A running backend (API) at `http://localhost:3333`

---

## 🚀 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Felipebasilio/ReactiveBeerFront.git
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   or if using Yarn:
   ```sh
   yarn install
   ```

---

## ▶️ Running the Application
To start the development server:
```sh
npm run dev
```
Or with Yarn:
```sh
yarn dev
```

This will start the frontend on `http://localhost:5173/`.

---

## 🔄 Environment Variables
If needed, create a `.env` file in the root directory:
```sh
VITE_API_URL=http://localhost:3333
```
This ensures the frontend communicates with the backend.

---

## 📁 Project Structure
```
frontend/
│── src/
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom hooks
│   ├── store/              # Redux store setup
│   ├── styles/             # Global and component styles
│   ├── App.jsx             # Main app entry
│   ├── main.jsx            # React root entry
│── public/
│── package.json            # Project dependencies
│── README.md               # This guide
```

---

## 📌 Features Implemented
✅ **Product Listing Page (PLP)** – Lists all available products.
✅ **Product Details Page (PDP)** – Shows product information with stock & price updates every 5 seconds.
✅ **Redux for State Management** – Persists selected product and UI states.
✅ **React Router for Navigation** – Enables dynamic routing between pages.
✅ **Framer Motion for Animations** – Smooth transitions between views.
✅ **CORS-Enabled Backend Communication** – Connects with the API at `http://localhost:3333`.

---

## 🛠️ Troubleshooting
- **Backend is not running?** Start it with:
  ```sh
  node server.js
  ```
- **CORS error?** Ensure the backend includes CORS headers.
- **Missing dependencies?** Run:
  ```sh
  npm install
  ```

---

## 👨‍💻 Author
Developed by **Felipe Basilio**.

---