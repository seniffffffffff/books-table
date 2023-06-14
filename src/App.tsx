import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BooksData, TableRowsNames } from "./interfaces/interfaces";
import TableComp from "./components/common/TableComp";

function App() {
  // const [booksData, setBooksData] = useState<BooksData[]>([]);
  // const [author, setAuthor] = useState<string[]>([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       // `https://www.googleapis.com/books/v1/volumes?q=${"harry"}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU &maxResults=40`
  //       `https://www.googleapis.com/books/v1/volumes?q=smith&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=10`
  //     )
  //     .then((res) => setBooksData(res.data.items));
  // }, []);
  // // console.log(booksData);

  return (
    <div className="App">
      {/* <TableComp setAuthor={setAuthor} booksData={booksData} /> */}
    </div>
  );
}

export default App;
