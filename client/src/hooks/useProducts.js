import { useCallback, useEffect, useState } from "react";

import {
  httpGetProducts,
  httpCreateProduct,
  httpDeleteProduct,
} from "./requests";

function useProducts() {
  // initialise state management for products
  const [products, saveProducts] = useState([]);

  // retrieve products from backend and save to state
  const getProducts = useCallback(async () => {
    const fetchedProducts = await httpGetProducts();
    saveProducts(fetchedProducts);
  }, []);

  // call the getProducts method after render
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // on form submit, take the event,
  // extract the data and make create HTTP request
  const createProduct = useCallback(
    async (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const name = data.get("name");
      const brand = data.get("brand");
      const quantity = data.get("quantity");
      const response = await httpCreateProduct({ name, brand, quantity });

      if (response.ok) {
        // new product was aded so rerun this
        getProducts();
      } else {
        const reason = await response.json();
        alert(`Failure creating a new product:\n${reason.detail}`);
        console.log(`Failure creating a new product:\n${reason.detail}`);
      }
    },
    [getProducts]
  );

  // take the ID passed in by the delete button and make a delete request using it
  const deleteProduct = useCallback(
    async (id) => {
      const response = await httpDeleteProduct(id);
      if (response.ok) {
        // deleted product so rerun this
        getProducts();
      } else {
        const reason = await response.json();
        alert(`Cannot delete product '${id}':\n${reason.detail}`);
        console.log(`Cannot delete product '${id}':\n${reason.detail}`);
        // reload the products, item might have been deleted elsewhere
        // so get the latest state of products table
        getProducts();
      }
    },
    [getProducts]
  );

  return {
    products,
    createProduct,
    deleteProduct,
  };
}

export default useProducts;
