# 🚀 MockMate.AI

> Your Personal AI Interview Companion

MockMate.AI is an AI-powered mock interview platform that helps students and professionals prepare for technical interviews through realistic AI-driven conversations, instant feedback, and detailed performance analysis.

---

## ✨ Features

- 🤖 AI-powered mock interviews
- 🎙️ Voice-based interview interaction
- 📄 Resume upload and analysis
- 📊 Detailed interview performance report
- 💡 Personalized improvement suggestions
- 🔐 Secure Google Authentication
- 💳 Razorpay Payment Integration
- 📱 Responsive Modern UI

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- JWT Authentication

### AI

- Gemini API
- AI Response Evaluation

### Payment

- Razorpay

---

## 📂 Project Structure

```
MockMate.AI
│
├── client/
│   ├── src/
│   ├── components/
│   └── pages/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   └── config/
│
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/niketarora/mockmate-ai.git
```

Move into the project

```bash
cd mockmate-ai
```

Install dependencies

### Client

```bash
cd client
npm install
```

### Server

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=

JWT_SECRET=

GEMINI_API_KEY=

RAZORPAY_KEY_ID=

RAZORPAY_SECRET=

CLIENT_URL=http://localhost:5173
```

---

## Run the Project

Backend

```bash
cd server
npm run server
```

Frontend

```bash
cd client
npm run dev
```

---

## Future Improvements

- Interview history
- AI voice interviewer
- Coding interview mode
- Company-specific interview rounds
- ATS Resume Score
- Leaderboard
- Dark Mode

---

## Author

**Niket Arora**

GitHub: https://github.com/niketarora

---

⭐ If you found this project useful, consider giving it a star.
