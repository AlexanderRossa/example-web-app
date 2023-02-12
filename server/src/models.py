from sqlalchemy import Column, Integer, String

from .database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    brand = Column(String, index=True, nullable=True)
    quantity = Column(Integer, nullable=False, default=1)
