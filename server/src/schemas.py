from pydantic import BaseModel


class ProductBase(BaseModel):
    name: str
    brand: str | None = None
    quantity: int = 1


class ProductCreate(ProductBase):
    pass


class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True
