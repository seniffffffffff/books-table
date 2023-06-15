import { useEffect } from "react";
import TableComp from "../common/TableComp";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store/reducers";
import { useActions } from "../../hooks/useAction";
import Loader from "../common/Loader";

const TableAuthorBooks = () => {
  const { authorBooks, loading, authorName } = useTypedSelector(
    (state: RootState) => state.authorBooks
  );

  const { fetchAuthorBooks, fetchMoreAuthorBooks } = useActions();

  useEffect(() => {
    const storedData = localStorage.getItem("authorName");

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      fetchAuthorBooks(parsedData.authorName);
    }

    return () => {
      localStorage.removeItem("authorName");
    };
  }, []);

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      fetchMoreAuthorBooks(authorName);
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
      <TableComp tableData={authorBooks} />
      {loading && <Loader />}
    </>
  );
};

export default TableAuthorBooks;
