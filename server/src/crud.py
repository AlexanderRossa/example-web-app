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


def delete_product(db: Session, product_id: int):
    # extracting query here like this to use it for deletion if product exists
    product_query = db.query(models.Product).filter(
        models.Product.id == product_id
    )
    if product_query.first():
        product_query.delete(synchronize_session=False)
        db.commit()
        return True
    # let the caller know deletion was not possible
    return False
