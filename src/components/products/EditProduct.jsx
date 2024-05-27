import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = useProducts();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
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
    editProduct(id, product);
  };
  console.log(oneProduct);
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
        EDIT PRODUCT
      </Typography>
      <TextField
        onChange={handleInput}
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        value={product.title}
      />
      <TextField
        name="description"
        onChange={handleInput}
        fullWidth
        label="Description"
        variant="outlined"
        value={product.description}
      />
      <TextField
        onChange={handleInput}
        name="image"
        fullWidth
        label="Image URL"
        variant="outlined"
        value={product.image}
      />
      <TextField
        onChange={handleInput}
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        value={product.price}
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        SAVE
      </Button>
    </Box>
  );
};

export default EditProduct;
