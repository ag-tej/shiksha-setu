# Shiksha Setu

**An AI-powered multi-source educational chatbot using Retrieval-Augmented Generation (RAG)**

Shiksha Setu is an intelligent educational chatbot designed to make learning interactive and context-aware.
It enables students and educators to upload PDFs or add website URLs, retrieve relevant content using semantic search, and generate grounded answers through a local Large Language Model (LLM).

---

## Features

* **Multi-source content ingestion** — Upload PDFs, text files, or submit website URLs.
* **Retrieval-Augmented Generation (RAG)** — Combines semantic retrieval with local generative AI for accurate answers.
* **Conversational interface** — Real-time chat with context history and document grounding.
* **FastAPI backend** — High-performance async API for document and chat handling.
* **ChromaDB vector store** — Efficient embedding storage and retrieval.
* **React frontend** — Clean, responsive UI built with React + Tailwind CSS.
* **JWT authentication** — Secure user login and session control.
* **Local LLM via Ollama** — Privacy-preserving response generation without external API calls.

---

## Tech Stack

| Layer               | Technologies                             |
| ------------------- | ---------------------------------------- |
| **Frontend**        | React.js, Tailwind CSS                   |
| **Backend**         | FastAPI, LangChain                       |
| **Vector DB**       | ChromaDB                                 |
| **Database**        | MongoDB                                  |
| **Embeddings**      | all-MiniLM-L6-v2 (Sentence Transformers) |
| **Language Model**  | Mistral / Llama 3 via Ollama             |
| **Scraping**        | BeautifulSoup                            |
| **Version Control** | Git & GitHub                             |

---

## System Architecture

```
User → React Frontend → FastAPI Backend
     → ChromaDB (semantic retrieval)
     → Ollama (Mistral/Llama 3 generation)
     → MongoDB (users, chats, documents)
```

The layered architecture:

* **Frontend:** React + Tailwind for uploads and chat UI
* **Backend:** FastAPI handles routing, embedding, and RAG orchestration
* **RAG Pipeline:** Query embedding, similarity search, prompt construction, and generation
* **Data Layer:** MongoDB + ChromaDB manage persistence and semantic search

---

## Setup Instructions

### Prerequisites

Make sure you have installed:

* **Python 3.10 +**
* **Node.js 16 + and npm**
* **Ollama** (for running local LLM)
* **MongoDB** (local or remote instance)
* **Git**

---

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ag-tej/shiksha-setu.git
   cd shiksha-setu/backend
   ```

2. **Create a virtual environment and activate**

   ```bash
   python -m venv venv
   source venv/bin/activate      # (Linux/Mac)
   venv\Scripts\activate         # (Windows)
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set environment variables**
   Create a `.env` file in `/backend`:

   ```
   MONGO_URI=mongodb://localhost:27017/shiksha_setu
   JWT_SECRET=your_secret_key
   ```

5. **Run the backend server**

   ```bash
   uvicorn app.main:app --reload
   ```

   The backend will start at **[http://localhost:8000](http://localhost:8000)**

---

### Ollama Setup

1. **Install Ollama** from [https://ollama.ai/download](https://ollama.ai/download)
2. **Pull the model** (Mistral or Llama 3)

   ```bash
   ollama pull mistral
   # or
   ollama pull llama3
   ```
3. **Start Ollama** in a separate terminal

   ```bash
   ollama serve
   ```

   Ollama will run on port 11434 by default.

---

### 💻 Frontend Setup

1. **Open a new terminal and navigate to frontend**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in `/frontend`:

   ```
   VITE_API_URL=http://localhost:8000
   ```

4. **Run the frontend**

   ```bash
   npm run dev
   ```

   The frontend will be available at **[http://localhost:5173](http://localhost:5173)**

---

### Access the App

1. Ensure **Ollama**, **backend**, and **frontend** are all running.
2. Open your browser at **[http://localhost:5173](http://localhost:5173)**.
3. Sign up / Log in, upload a PDF or URL, and start chatting!

---

## Project Structure

```
shiksha-setu/
├── backend/
│   ├── app/
│   │   ├── auth.py
│   │   ├── chat.py
│   │   ├── rag.py
│   │   ├── database.py
│   │   └── main.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
├── README.md
└── .gitignore
```

---

## Testing

* ✅ File and URL uploads
* ✅ RAG response generation accuracy
* ✅ JWT authentication
* ✅ Load testing (20 parallel requests < 55 s avg latency)

---

## Results

* Delivered accurate, context-aware answers from uploaded documents and URLs
* Stable performance with robust authentication and persistence
* Modular design ready for GPU acceleration and scaling

---

## Future Enhancements

* GPU-accelerated inference
* Multi-language support
* Long-context memory
* Integration with LMS platforms
* Adaptive learning analytics

---

## License & Credits

Developed as a **B.Sc. CSIT Final Year Project** at **Deerwalk Institute of Technology (Tribhuvan University)**
**Project Title:** *Implementation of a Retrieval-Augmented Generation Pipeline for a Multi-Source Educational Chatbot*
**Author:** Tej Agrawal (2025)
**Supervisor:** Mr. Saurav Gautam

---
