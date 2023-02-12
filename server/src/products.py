from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from . import crud, schemas
from .database import get_db

router = APIRouter()


@router.get("", response_model=List[schemas.Product])
def get_all_products(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    # naive pagination of results, highly likely to never be needed for this app
    products = crud.get_all_products(db, skip=skip, limit=limit)
    return products


@router.post("", response_model=schemas.Product, status_code=status.HTTP_201_CREATED)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    # try and see if product already exists in the database
    if crud.get_product_by_name(db, product_name=product.name):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Product '{product.name}' already exists!"
        )
    return crud.create_product(db=db, product=product)


@router.get("/{product_id}", response_model=schemas.Product)
def get_product_by_id(product_id: int, db: Session = Depends(get_db)):
    product = crud.get_product(db, product_id=product_id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product with ID '{product_id}' not found!"
        )
    return product


@router.delete("/{product_id}")
def delete_product(product_id: int, db: Session = Depends(get_db)):
    pass
