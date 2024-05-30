import { Button } from "@mui/material";
import React, { useState } from "react";
import AddProduct from "../components/products/AddProduct";
import AddCategory from "../components/products/AddCategory";

const AdminPage = () => {
  const [open, setOPen] = useState(false);
  const handleOpen = () => setOPen(true);
  const handleClose = () => setOPen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Add category</Button>
      <AddProduct />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
