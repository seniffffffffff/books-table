import axios from "axios";
import { Dispatch } from "redux";
import {
  AuthorBooksAction,
  AuthorBooksActionTypes,
} from "../../types/authorBooks";
import { RootState } from "../reducers";

export const fetchAuthorBooks = (authorName: string) => {
  return async (
    dispatch: Dispatch<AuthorBooksAction>,
    getState: () => RootState
  ) => {
    try {
      const { currentPage } = getState().authorBooks;
      dispatch({ type: AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS });
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: `inauthor:${authorName}`,
            maxResults: 10,
            startIndex: currentPage,
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      const data = { authorName: authorName };
      localStorage.setItem("authorName", JSON.stringify(data));

      dispatch({
        type: AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS_SUCCESS,
        payload: response.data.items,
      });
    } catch (e) {
      dispatch({
        type: AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS_ERROR,
        payload: "An error occurred while loading books",
      });
    }
  };
};

export const fetchMoreAuthorBooks = (authorName: string) => {
  return async (
    dispatch: Dispatch<AuthorBooksAction>,
    getState: () => RootState
  ) => {
    try {
      const { currentPage } = getState().authorBooks;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: `inauthor:${authorName}`,
            maxResults: 10,
            startIndex: currentPage + 10,
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      dispatch({
        type: AuthorBooksActionTypes.FETCH_MORE_AUTHOR_BOOKS_SUCCESS,
        payload: response.data.items,
      });
    } catch (e) {
      dispatch({
        type: AuthorBooksActionTypes.FETCH_MORE_AUTHOR_BOOKS_ERROR,
        payload: "An error occurred while loading more books",
      });
    }
  };
};
