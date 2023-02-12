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

  // TODO: implement the logic for interacting with the HTTP requests here
  const createProduct = useCallback(async () => {}, []);
  const deleteProduct = useCallback(async () => {}, []);

  return {
    products,
    createProduct,
    deleteProduct,
  };
}

export default useProducts;
