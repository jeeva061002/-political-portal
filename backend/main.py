from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import datetime

app = FastAPI(title="Naam Tamilar Katchi - Official API")

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NewsItem(BaseModel):
    id: int
    title: str
    content: str
    date: str
    category: str

class VolunteerData(BaseModel):
    name: str
    email: str
    phone: str
    district: str
    message: str

# Mock Database
news_db = [
    {"id": 1, "title": "Agriculture Reforms Proposed", "content": "Seeman outlines 10-point plan for organic farming.", "date": "2026-03-01", "category": "Agriculture"},
    {"id": 2, "title": "Education Movement Hits Miletsone", "content": "100 New free learning centers opened this week.", "date": "2026-03-05", "category": "Education"},
]

@app.get("/")
async def root():
    return {"status": "online", "message": "Welcome to NTK Official Backend API"}

@app.get("/api/news", response_model=List[NewsItem])
async def get_news():
    return news_db

@app.get("/api/election-date")
async def get_election_date():
    # March 1, 2026
    return {"target_date": "2026-03-01T00:00:00Z"}

@app.post("/api/volunteer")
async def register_volunteer(data: VolunteerData):
    # Here you would typically save to a real database (PostgreSQL/MongoDB)
    print(f"New Volunteer Received: {data.name} from {data.district}")
    return {"status": "success", "message": f"Thank you {data.name}, our district secretary will contact you."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
