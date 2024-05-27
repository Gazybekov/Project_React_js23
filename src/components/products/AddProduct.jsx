import { Description } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { addProduct, getcategories, categories } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    getcategories();
  }, []);
  const handleInput = (e) => {
    if (e.target.name == "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
  console.log(product);
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInput}
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
      />
      <CategorySelect handleInput={handleInput} categories={categories} />
      <TextField
        name="description"
        onChange={handleInput}
        fullWidth
        label="Description"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        name="image"
        fullWidth
        label="Image URL"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
