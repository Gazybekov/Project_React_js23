import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useCart } from "../context/CartContextProvider";

const Cart = () => {
  const { cart, changeProductCount, deleteProductFromCart } = useCart();
  console.log(cart);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>SubPrice</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((elem) => (
            <TableRow
              key={elem.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                <img src={elem.item.image} alt="" width={70} />
              </TableCell>
              <TableCell align="right">{elem.item.title}</TableCell>
              <TableCell align="right">{elem.item.category}</TableCell>
              <TableCell align="right">{elem.item.price}</TableCell>
              <TableCell align="right">
                <input
                  onChange={(e) =>
                    changeProductCount(elem.item.id, e.target.value)
                  }
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={elem.count}
                />
              </TableCell>
              <TableCell align="right">{elem.subPrice}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteProductFromCart(elem.item.id)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button>BUY NOW FOR {cart.totalPrice}</Button>
    </TableContainer>
  );
};

export default Cart;
