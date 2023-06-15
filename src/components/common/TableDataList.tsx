import React from "react";
import { TableDataProps } from "../../interfaces/interfaces";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AuthorsList from "./AuthorsList";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useAction";
import bookImg from "../../assets/bookImg.png";

const TableDataList: React.FC<TableDataProps> = ({ tableData }) => {
  const { fetchAuthorBooks, fetchBookInfo } = useActions();
  return (
    <>
      {tableData &&
        tableData.map((item, index) => (
          <TableRow
            key={item.id + index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              color: "white",
              transition: "background 0.5s ease-in-out",
              "&:hover": {
                backgroundColor: "#90caf9",
              },
            }}
          >
            <TableCell component="th" scope="row" sx={{ color: "white" }}>
              <Link
                to={`/books/${item.volumeInfo.authors}/${item.volumeInfo.title}`}
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => {
                  fetchAuthorBooks(item.volumeInfo.authors.join(""));
                  fetchBookInfo(item.id);
                }}
              >
                {item.volumeInfo.title}
              </Link>
            </TableCell>
            <TableCell sx={{ color: "white" }}>{item.id}</TableCell>
            <TableCell sx={{ color: "white" }}>
              <AuthorsList authors={item.volumeInfo.authors} />
            </TableCell>
            <TableCell>
              <img
                style={{ maxWidth: "50px" }}
                src={item.volumeInfo.imageLinks?.smallThumbnail || bookImg}
                alt="book cover"
              />
            </TableCell>
          </TableRow>
        ))}
    </>
  );
};

export default TableDataList;
