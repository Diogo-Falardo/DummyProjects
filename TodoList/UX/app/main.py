from fastapi import FastAPI
from datetime import datetime, timezone
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():

    todo = ["wash your face", "wash your teeth", "take a shower", "go to sleep"]

    todoData  = {
        "data": datetime.now(timezone.utc),
        "Name": "Name XPTO",
        "Todo": todo
    }

    return {"message": todoData}

@app.post("/random")
def random(
    x: int,
    y: int

):
    
    return {"message": x + y}
