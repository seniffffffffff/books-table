import React, { useEffect, useState } from "react";
import TableComp from "./TableComp";
import axios from "axios";
import { BooksData } from "../../interfaces/interfaces";
import Loader from "../layout/Loader";

const TableBooks: React.FC = () => {
  const [booksData, setBooksData] = useState<BooksData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [author, setAuthor] = useState<any>("");

  const fetchData = async () => {
    setLoading(true);
    //stephen-king
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: author.length === 0 ? "any" : `inauthor:${author}`,
            maxResults: 10,
            startIndex: (page - 1) * 10,
            key: "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU",
          },
        }
      );

      setBooksData((prevData) => [...prevData, ...res?.data.items]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };
  console.log(booksData, "booksData");

  useEffect(() => {
    setBooksData([]);
    fetchData();
  }, [author]);

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
    <>
      <TableComp setAuthor={setAuthor} booksData={booksData} />
      {loading && <Loader />}
    </>
  );
};

export default TableBooks;
