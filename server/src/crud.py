from sqlalchemy.orm import Session

from . import models, schemas


def get_product(db: Session, product_id: int):
    return db.query(models.Product).filter(models.Product.id == product_id).first()


def get_product_by_name(db: Session, product_name: str):
    return db.query(models.Product).filter(models.Product.name == product_name).first()


def get_all_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Product).offset(skip).limit(limit).all()


def create_product(db: Session, product: schemas.ProductCreate):
    new_product = models.Product(**product.dict())
    db.add(new_product)
    db.commit()
    # refresh to update with the generated ID
    db.refresh(new_product)
    return new_product
