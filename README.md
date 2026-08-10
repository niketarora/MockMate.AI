# 🚀 MockMate.AI

> **Your Personal AI-Powered Mock Interview Companion**
>
> MockMate.AI helps job seekers, students, and professionals ace technical interviews through realistic AI-driven conversations, instant evaluations, and detailed visual performance metrics.

---

## 🌟 Key Features

*   **🤖 AI-Powered Interviewers:** Experience interactive mock interviews tailored to your target role and experience.
*   **🎙️ Interactive Voice & Text:** Choose between speech-to-text input or typing to converse naturally with the AI.
*   **📄 Resume-Tailored Questions:** Upload your resume to receive highly customized, context-aware technical questions.
*   **📊 Detailed Performance Analytics:** Receive instant visual report cards featuring:
    *   Overall readiness scores.
    *   Metrics on **Confidence**, **Communication**, and **Correctness**.
    *   Question-by-question breakdowns with model answers.
*   **💳 Credits System:** Built-in Razorpay integration to purchase mock interview packages.
*   **🔐 Secure Google Auth:** Seamless and secure authentication using Firebase Google Sign-In.
*   **📱 Glassmorphic UI:** A premium, fully responsive modern user interface with smooth transitions and micro-animations.

---

## 📂 Project Structure

```text
MockMate.AI/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── components/     # UI Components (e.g. Step3Report)
│   │   ├── pages/          # Layout Pages (Home, InterviewPage, Auth)
│   │   ├── redux/          # Global State (User Slice)
│   │   └── utils/          # Firebase, config
│   └── package.json
└── server/                 # Express Backend (Node.js)
    ├── config/             # DB & Token utilities
    ├── controllers/        # Route Handlers
    ├── middleware/         # Auth validation
    ├── models/             # Mongoose schemas
    ├── routes/             # API Endpoints
    ├── vercel.json         # Vercel Serverless Config
    └── package.json
```

---

## 🛠️ Local Installation & Setup

### Prerequisites

*   Node.js (v18+)
*   MongoDB Instance (Local or Cloud Atlas)
*   Firebase Project (for Google Auth)
*   Razorpay Developer Account

### 1. Clone the Project

```bash
git clone https://github.com/<your-username>/mockmate-ai.git
cd mockmate-ai
```

### 2. Configure Environment Variables

#### Backend (`server/.env`)
Create a `.env` file in the `server` directory:
```env
PORT=8000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/mockmate
JWT_SECRET=your_jwt_secret_key_here
OPENROUTER_API_KEY=your_openrouter_or_gemini_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

#### Frontend (`client/.env`)
Create a `.env` file in the `client` directory:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 3. Install & Start

#### Start Backend:
```bash
cd server
npm install
npm run dev
```

#### Start Frontend:
```bash
cd ../client
npm install
npm run dev
```

---

## 🐙 How to Push to GitHub

Follow these steps to initialize and push your project to a new repository on GitHub:

1.  **Create a Repository:** Go to [GitHub](https://github.com) and create a new **empty repository** named `mockmate-ai`.
2.  **Initialize Git & Commit:** Open your terminal in the root directory (`mockmate-ai/`):
    ```bash
    git init
    git add .
    git commit -m "feat: complete initial project setup with serverless vercel support"
    ```
3.  **Link to GitHub:** Replace `<your-username>` with your GitHub username:
    ```bash
    git branch -M main
    git remote add origin https://github.com/<your-username>/mockmate-ai.git
    git push -u origin main
    ```

---

## ⚡ Deployment to Vercel

We can deploy both the **Frontend** and **Backend** to Vercel.

### Step 1: Deploy Backend (Server)

1.  Sign in to [Vercel](https://vercel.com).
2.  Click **Add New** > **Project** and select your GitHub repository.
3.  Set the **Root Directory** to `server`.
4.  Expand **Environment Variables** and add all variables from `server/.env`:
    *   `MONGODB_URI`
    *   `JWT_SECRET`
    *   `OPENROUTER_API_KEY`
    *   `RAZORPAY_KEY_ID`
    *   `RAZORPAY_KEY_SECRET`
    *   `NODE_ENV=production`
5.  Click **Deploy**. Once finished, copy your server's Vercel deployment URL (e.g. `https://mockmate-api.vercel.app`).

### Step 2: Deploy Frontend (Client)

Before deploying the frontend, update the backend API endpoint to point to your live Vercel backend:
1.  Open `client/src/App.jsx` and change:
    ```javascript
    // Change this to your live backend URL
    export const ServerUrl = "https://mockmate-api.vercel.app";
    ```
2.  Commit and push this change to GitHub:
    ```bash
    git add client/src/App.jsx
    git commit -m "config: update api url for production"
    git push
    ```
3.  In Vercel, click **Add New** > **Project** and import the same repository.
4.  Set the **Root Directory** to `client`.
5.  Expand **Environment Variables** and add all variables from `client/.env`:
    *   `VITE_FIREBASE_APIKEY`
    *   `VITE_RAZORPAY_KEY_ID`
6.  Click **Deploy**. Your frontend is now live!
