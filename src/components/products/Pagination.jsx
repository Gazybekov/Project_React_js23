import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({ page, count, handleChange }) => {
  return (
    <Stack spacing={2}>
      <Typography> Page: {page} </Typography>
      <Pagination count={count} color="secondary" onChange={handleChange} />
    </Stack>
  );
};

export default PaginationControlled;
