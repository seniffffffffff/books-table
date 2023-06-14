import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/page/Home";
import InfoBook from "../components/page/InfoBook";

export const BrowserRouter = createBrowserRouter([
  {
    path: "/books",
    element: <Home />,
  },
  {
    path: "/books/:author",
    element: <Home />,
  },
  {
    path: "/books/:author/:book",
    element: <InfoBook />,
  },
  {
    path: "*",
    element: <Navigate to="/books" />,
  },
]);
