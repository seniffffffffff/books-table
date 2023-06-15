import React from "react";
import { AuthorsProps } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useActions } from "../../hooks/useAction";

const AuthorsList: React.FC<AuthorsProps> = ({ authors }) => {
  const { fetchAuthorBooks } = useActions();
  return (
    <>
      {authors?.map((item, index) => (
        <Box key={index}>
          <Link
            to={`/books/${item}`}
            onClick={() => {
              fetchAuthorBooks(item);
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
