import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
        ))}
      </Box>
    </div>
  );
};

export default ProductList;
