import React from "react";
import { TableDataProps } from "../../interfaces/interfaces";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import AuthorsList from "../layout/AuthorsList";
import { Link } from "react-router-dom";

const TableDataList: React.FC<TableDataProps> = ({ booksData, setAuthor }) => {
  return (
    <>
      {booksData.map((item, index) => (
        <TableRow
          key={item.id + index}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            color: "white",
          }}
        >
          <TableCell component="th" scope="row" sx={{ color: "white" }}>
            <Link
              to={`/books/${item.volumeInfo.authors[0]}/${item.volumeInfo.title}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {item.volumeInfo.title}
            </Link>
          </TableCell>
          <TableCell sx={{ color: "white" }}>{item.id}</TableCell>
          <TableCell sx={{ color: "white" }}>
            <AuthorsList
              setAuthor={setAuthor}
              authors={item.volumeInfo.authors}
            />
          </TableCell>
          <TableCell>
            <img
              style={{ maxWidth: "50px" }}
              src={
                item.volumeInfo.imageLinks?.smallThumbnail ||
                "https://i.pinimg.com/originals/60/38/7b/60387bfc9f91172d2d456286b4022991.png"
              }
              alt="book cover"
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  ); // ID, Author, Title, Kind and any additional relevant data
};

export default TableDataList;
