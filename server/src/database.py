from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

# disabling check_same_thread here to prevent access issues between FastAPI and SQLite
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """
    Function used for passing DB as a dependency.
    Each request will have its own sessions instance.
    """
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
