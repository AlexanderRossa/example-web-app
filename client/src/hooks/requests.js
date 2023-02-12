const API_URL = "http://localhost:8000";

// Load products and return as JSON
async function httpGetProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}

// Create a new product
async function httpCreateProduct(product) {
  try {
    return await fetch(`${API_URL}/products`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  } catch (err) {
    console.log(err);
    return { ok: false };
  }
}

// Delete a product
async function httpDeleteProduct(productId) {
  try {
    return await fetch(`${API_URL}/products/${productId}`, {
      method: "delete",
    });
  } catch (err) {
    console.log(err);
    return { ok: false };
  }
}

export { httpGetProducts, httpCreateProduct, httpDeleteProduct };
