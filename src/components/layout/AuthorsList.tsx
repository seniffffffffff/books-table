import React from "react";
import { AuthorsProps } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const AuthorsList: React.FC<AuthorsProps> = ({ authors, setAuthor }) => {
  return (
    <>
      {authors?.map((item, index) => (
        <Box key={index}>
          <Link
            to={`/books/${item}`}
            onClick={() => {
              setAuthor(item);
            }}
            style={{ textDecoration: "none", color: "white" }}
          >
            {item}
          </Link>
        </Box>
      ))}
    </>
  );
};

export default AuthorsList;
