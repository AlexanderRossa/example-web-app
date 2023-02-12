import { useCallback, useState } from "react";

import {
  httpGetProducts,
  httpCreateProduct,
  httpDeleteProduct,
} from "./requests";

function useProducts() {
  // initialise state management for products
  const [products, saveProducts] = useState([]);

  // TODO: implement the logic for interacting with the HTTP requests here
  const getProducts = useCallback(async () => {}, []);
  const createProduct = useCallback(async () => {}, []);
  const deleteProduct = useCallback(async () => {}, []);

  return {
    products,
    getProducts,
    createProduct,
    deleteProduct,
  };
}

export default useProducts;
