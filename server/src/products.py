from fastapi import APIRouter

router = APIRouter()


@router.get("")
def get_all_products():
    pass


@router.post("")
def create_product():
    pass


@router.get("/{product_id}")
def get_product_by_id():
    pass


@router.delete("/{product_id}")
def delete_product():
    pass
