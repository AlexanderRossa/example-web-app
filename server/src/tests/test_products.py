from fastapi import status

products = [
    {"name": "Carrot", "brand": "Harvest Co.", "quantity": 10},
    {"name": "Apple", "brand": "Harvest Co.", "quantity": 5},
    {"name": "Pepsi", "brand": "Pepsi Co.", "quantity": 1},
]


def create_product(client, product):
    """
    Helper method for creating products and checking on the response of that.
    """
    response = client.post("/products", json=product)
    assert response.status_code == status.HTTP_201_CREATED
    data = response.json()
    assert data["name"] == product["name"]
    assert "id" in data

    # return ID to be potentially used by tests
    return data["id"]


def create_product_failure(client, product):
    """
    Helper method for product creation that is expected to fail.
    """
    response = client.post("/products", json=product)
    assert response.status_code == status.HTTP_400_BAD_REQUEST


def compare_product(client, product, product_id):
    """
    Helper method for comparing product in response with a local one.
    """
    response = client.get(f"/products/{product_id}")
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert data["name"] == product["name"]
    assert data["brand"] == product["brand"]
    assert data["quantity"] == product["quantity"]


def test_create_products(client):
    """
    Create a number of products at once, then get all products and compare.
    """
    # create products one by one
    for product in products:
        product_id = create_product(client, product)
        compare_product(client, product, product_id)

    # test GET all retrieves the number of products we just created
    response = client.get("/products")
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert len(data) == len(products)


def test_create_and_delete_product(client):
    """
    Tests the whole product creation and deletion workflow.
    """
    # Create product and check it's correct
    product_id = create_product(client, products[0])
    compare_product(client, products[0], product_id)

    # Now delete the same product
    delete_response = client.delete(f"/products/{product_id}")
    assert delete_response.status_code == status.HTTP_200_OK

    # Try and get it again and expect that to fail
    get_response = client.get(f"/products/{product_id}")
    assert get_response.status_code == status.HTTP_404_NOT_FOUND
    get_detail = get_response.json().get("detail", "")
    assert get_detail == f"Product with ID '{product_id}' not found!"


def test_names_are_unique(client):
    """
    Makes sure that creation of product with a name that already exists fails.
    """
    created_product_id = create_product(client, products[0])
    assert created_product_id == 1
    create_product_failure(client, products[0])
