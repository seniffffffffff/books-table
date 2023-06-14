import { Box } from "@mui/material";
import React, { useState } from "react";
import TableBooks from "../common/TableBooks";
import BreadcrumbsComp from "../layout/BreadcrumbsComp";

const Home = () => {
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
        <TableBooks />
      </Box>
    </Box>
  );
};

export default Home;
