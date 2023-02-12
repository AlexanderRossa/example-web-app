const API_URL = "http://localhost:8000";

// Load products and return as JSON
async function httpGetProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}

// TODO:
// Create a new product
async function httpCreateProduct(product) {}

// TODO:
// Delete a product
async function httpDeleteProduct(productId) {}

export { httpGetProducts, httpCreateProduct, httpDeleteProduct };
