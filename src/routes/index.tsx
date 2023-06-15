import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import AuthorBooks from "../components/pages/AuthorBooks";
import BookInfo from "../components/pages/BookInfo";

export const BrowserRouter = createBrowserRouter([
  {
    path: "/books",
    element: <Home />,
  },
  {
    path: "/books/:author",
    element: <AuthorBooks />,
  },
  {
    path: "/books/:author/:book",
    element: <BookInfo />,
  },
  {
    path: "*",
    element: <Navigate to="/books" />,
  },
]);
