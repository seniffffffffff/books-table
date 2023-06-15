import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableDataProps, TableRowsNames } from "../../interfaces/interfaces";
import TableDataListComp from "./TableDataList";
import TableRowComp from "./TableRow";
import TableBody from "@mui/material/TableBody";

const TableComp: React.FC<TableDataProps> = ({ tableData }) => {
  const tableRowsNames: TableRowsNames[] = [
    { rowName: "Book name" },
    { rowName: "ID" },
    { rowName: "Author(s)" },
    { rowName: "Preview" },
  ];

  return (
    <TableContainer
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#353a40",
      }}
      component={Paper}
    >
      <Table sx={{ maxWidth: 900, color: "white" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableRowComp tableRowsNames={tableRowsNames} />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableDataListComp tableData={tableData} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
