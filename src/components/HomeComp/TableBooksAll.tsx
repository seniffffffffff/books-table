import React, { useEffect, useState } from "react";
import TableComp from "../common/TableComp";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store/reducers";
import Loader from "../common/Loader";
import { useActions } from "../../hooks/useAction";
import Typography from "@mui/material/Typography";

const TableBooks: React.FC = () => {
  const { books, error, loading } = useTypedSelector(
    (state: RootState) => state.books
  );

  const { fetchBooks, fetchMoreBooks } = useActions();

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      fetchMoreBooks();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (error) {
    return <Typography color="text.red">Some thing went wrong!(</Typography>;
  }
  return (
    <>
      <TableComp tableData={books} />
      {loading && <Loader />}
    </>
  );
};

export default TableBooks;
