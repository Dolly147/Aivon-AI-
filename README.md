# 🤖 Aivon AI – Intelligent Conversational Assistant

🔗 **Live Demo:** https://aivon-ai-lilac.vercel.app/

---

## 🚀 Overview

**Aivon AI** is a modern conversational AI web application inspired by Google Gemini.
It allows users to interact with an AI assistant in real-time for answering questions, learning concepts, and brainstorming ideas.

The app is built using **React + Vite** and integrates with **Google Generative AI (Gemini API)** to generate intelligent responses.

---

## ✨ Features

* 💬 Real-time AI chat interface
* ⚡ Fast responses using Gemini API
* 🧠 Smart prompt suggestions
* 📝 Typing animation effect (AI response rendering)
* 📜 Chat history (recent prompts sidebar)
* 📱 Fully responsive UI
* 🎨 Clean and modern design

---

## 🛠️ Tech Stack

* **Frontend:** React, Vite, CSS
* **State Management:** React Context API
* **API:** Google Generative AI (Gemini)
* **Deployment:** Vercel

---

## 🧠 How It Works

```text
User Input → React UI → Gemini API → AI Response → Render with Typing Effect
```

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── Sidebar/
 │    ├── MainLayer/
 │
 ├── context/
 │    └── Context.jsx
 │
 ├── config/
 │    └── gemini.js
 │
 ├── assets/
 │
 └── App.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/aivon-ai.git
cd aivon-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

### 4. Run the app

```bash
npm run dev
```

---

## ⚠️ Note

* This project uses a **frontend API call**, so the API key may be exposed in the browser.
* For production-grade applications, it is recommended to move API calls to a backend.

---

## 📸 Screenshots

*(Add screenshots here if you want — optional but boosts impact)*

---

## 💡 Future Improvements

* 🔐 Backend integration for secure API handling
* 💾 Chat history storage (database)
* 🎙️ Voice input support
* 🌙 Dark mode
* ⚡ Streaming responses (like ChatGPT)


## 👨‍💻 Author

**Keerthi (Aivon Creator)**

* 💼 Software Developer
* 🌐 Passionate about AI & Web Development

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it helps a lot!
