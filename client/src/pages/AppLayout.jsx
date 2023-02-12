import React from "react";

import useProducts from "../hooks/useProducts";

import InputForm from "../components/InputForm";
import ProductsTable from "../components/ProductsTable";

export default function AppLayout(props) {
  // call the useProducts function to initialise the state and get the necessary
  // hooks to pass down to components via props
  const { products, createProduct, deleteProduct } = useProducts();

  return (
    <React.Fragment>
      <InputForm createProduct={createProduct} />
      <ProductsTable products={products} deleteProduct={deleteProduct} />
    </React.Fragment>
  );
}
