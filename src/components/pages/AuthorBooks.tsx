import { Box } from "@mui/material";
import React from "react";
import BreadcrumbsComp from "../common/BreadcrumbsComp";
import TableAuthorBooks from "../AuthorBooks/TableAuthorBooks";

const AuthorBooks = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        marginTop: "50px",
        maxWidth: "900px",
      }}
    >
      <Box>
        <BreadcrumbsComp />
        <TableAuthorBooks />
      </Box>
    </Box>
  );
};

export default AuthorBooks;
