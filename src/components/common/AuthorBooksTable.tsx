import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BooksData } from "../../interfaces/interfaces";
import axios from "axios";
import TableContainer from "@mui/material/TableContainer";
import TableComp from "./TableComp";
import Loader from "../layout/Loader";

const AuthorBooksTable = () => {
  const location = useLocation();
  console.log(location.pathname.replace(/[^a-zA-Z]/g, ""), "asd");
  const [author, setAuthor] = useState<any>("");
  console.log(author, "author");

  const [booksData, setBooksData] = useState<BooksData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //   https://www.googleapis.com/books/v1/volumes?q=inauthor:${`stephen-king`}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: `inauthor:${"stephen-king"}`,
            maxResults: 10,
            startIndex: (page - 1) * 10,
            key: "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU",
          },
        }
      );

      setBooksData((prevData) => [...prevData, ...res.data.items]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TableContainer>
      <TableComp setAuthor={setAuthor} booksData={booksData} />
      {loading && <Loader />}
    </TableContainer>
  );
};

export default AuthorBooksTable;
