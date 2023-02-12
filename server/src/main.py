from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models, products
from .database import engine

# create DB metadata based on the models
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

# Allow React to make cross origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router, tags=["Products"], prefix="/products")


@app.get("/")
def root():
    return {"message": ""}


@app.get("/api/health", tags=["API"])
def check_health():
    return {"message": ""}
