from fastapi import status


def test_health(client):
    assert client.get("/api/health").status_code == status.HTTP_200_OK


def test_root(client):
    assert client.get("/").status_code == status.HTTP_200_OK


def test_nonexistent(client):
    response = client.get("/this/doesnt/exist")
    assert response.status_code == status.HTTP_404_NOT_FOUND
