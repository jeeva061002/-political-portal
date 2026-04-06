# NTK Official Portal - Python Backend

This is the FastAPI-powered backend for the Tamil Nadu political portal. It provides dynamic endpoints for news, election countdowns, and volunteer management.

## 🚀 How to Run

1. **Install Python**: Ensure Python 3.9+ is installed on your system.
2. **Setup Virtual Environment** (Recommended):
   ```bash
   cd backend
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Start the Server**:
   ```bash
   python main.py
   ```
   The API will be available at `http://localhost:8000`.

## 📡 API Endpoints

- `GET /`: Status check.
- `GET /api/news`: Fetch latest news articles.
- `GET /api/election-date`: Fetch target election date for the countdown.
- `POST /api/volunteer`: Submit volunteer/membership interest from the District page.

## 🔗 Integration
The React frontend (specifically the **District** page) is configured to attempt a call to `http://localhost:8000/api/volunteer`. If the server is offline, it will gracefully fallback to a mock alert.
