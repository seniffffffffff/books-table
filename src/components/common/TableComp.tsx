import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableDataProps, TableRowsNames } from "../../interfaces/interfaces";
import TableDataList from "./TableDataListComp";
import TableRowComp from "./TableRowComp";
import TableBody from "@mui/material/TableBody";

const TableComp: React.FC<TableDataProps> = ({ booksData, setAuthor }) => {
  //   useEffect(() => {
  //     axios
  //       .get(
  //         // `https://www.googleapis.com/books/v1/volumes?q=${"harry"}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40`
  //         `https://www.googleapis.com/books/v1/volumes?q=inauthor:${`stephen-king`}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`
  //       )
  //       .then((res) => console.log(res.data.items));
  //   }, []);

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
        backgroundColor: "black",
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
          <TableDataList setAuthor={setAuthor} booksData={booksData} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
