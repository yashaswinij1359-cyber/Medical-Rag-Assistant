🧬 Medical RAG Research Assistant

An AI-powered Medical Research Assistant built using Retrieval-Augmented Generation (RAG). The application allows users to upload medical research papers in PDF format and ask questions based on the uploaded documents.

The system retrieves relevant information from the uploaded documents and uses Google Gemini AI to generate meaningful, context-aware answers.

📌 Week 2 – AI Internship Project

Project: Medical RAG Research Assistant
Type: AI / Generative AI / RAG
Backend: FastAPI
Frontend: HTML/CSS/JavaScript / React
AI Model: Google Gemini
Deployment: Vercel

---

🚀 Features

- 📄 Upload medical research papers in PDF format
- 🔍 Extract text from uploaded documents
- 🧠 Generate embeddings and perform semantic search
- 🤖 Ask questions about uploaded medical documents
- 💬 Get AI-generated answers using Google Gemini
- ⚡ FastAPI backend for API communication
- 🌐 Web-based user interface
- ☁️ Deployed online for easy access

---

🏗️ How It Works

The application follows the Retrieval-Augmented Generation (RAG) pipeline:

Upload PDF
    ↓
Extract Text
    ↓
Split Text into Chunks
    ↓
Generate Embeddings
    ↓
Store in Vector Database
    ↓
User Asks a Question
    ↓
Retrieve Relevant Information
    ↓
Send Context + Question to Gemini
    ↓
Generate AI Answer

---

🛠️ Technologies Used

Frontend

- HTML
- CSS
- JavaScript
- React (if applicable)

Backend

- Python
- FastAPI
- Uvicorn

AI & RAG

- Google Gemini API
- Retrieval-Augmented Generation
- FAISS
- NumPy

PDF Processing

- PyMuPDF

Deployment

- GitHub
- Vercel

---

📂 Project Structure

medical-rag-research-assistant/
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   ├── API.js
│   └── index.css
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── README.md
└── .gitignore

---

⚙️ Installation & Setup

1. Clone the Repository

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd medical-rag-research-assistant

2. Install Backend Dependencies

cd backend
pip install -r requirements.txt

3. Configure Environment Variables

Create a ".env" file inside the backend folder:

GEMINI_API_KEY=your_gemini_api_key

⚠️ Never upload your ".env" file or API keys to GitHub.

4. Start the Backend

uvicorn main:app --reload

The backend will run locally at:

http://127.0.0.1:8000

5. Start the Frontend

Install dependencies and run the frontend:

npm install
npm run dev

---

🔗 API Endpoints

Method| Endpoint| Description
GET| "/api/health"| Checks whether the backend is running
POST| "/api/upload"| Uploads a PDF document
POST| "/api/ask"| Sends a question to the AI assistant

---

💡 Example Usage

Step 1

Upload a medical research paper in PDF format.

Step 2

The application processes the document and creates searchable representations.

Step 3

Ask a question such as:

«"What are the main findings of this research paper?"»

Step 4

The RAG system retrieves relevant information from the document and Gemini generates an answer based on that context.

---

🎯 Objective

The main objective of this project is to demonstrate how Generative AI and Retrieval-Augmented Generation can be used to build an intelligent research assistant capable of answering questions from domain-specific documents.

---

🌟 Key Learning Outcomes

Through this project, I learned:

- How RAG systems work
- How to integrate Google Gemini API
- PDF text extraction using PyMuPDF
- Vector similarity search using FAISS
- Building REST APIs with FastAPI
- Connecting frontend and backend
- Handling file uploads
- Using environment variables securely
- Deploying AI applications
- Debugging API and CORS issues

---

🔮 Future Improvements

- 📚 Support multiple research papers simultaneously
- 🔗 Provide citations and references for generated answers
- 🧠 Improve document chunking and retrieval
- 💾 Add persistent vector storage
- 👤 Add user authentication
- 📊 Add research analytics and docu
