import axios from "axios";
import { BooksAction, BooksActionTypes } from "../../types/books";
import { RootState } from "../reducers";
import { Dispatch } from "redux";

export const fetchBooks = () => {
  return async (dispatch: Dispatch<BooksAction>, getState: () => RootState) => {
    try {
      const { currentPage } = getState().books;

      dispatch({ type: BooksActionTypes.FETCH_BOOKS });
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: "python",
            maxResults: 10,
            startIndex: currentPage,
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_SUCCESS,
        payload: response.data.items,
      });
    } catch (e) {
      dispatch({
        type: BooksActionTypes.FETCH_BOOKS_ERROR,
        payload: "An error occurred while loading books",
      });
    }
  };
};

export const fetchMoreBooks = () => {
  return async (dispatch: Dispatch<BooksAction>, getState: () => RootState) => {
    try {
      const { currentPage } = getState().books;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: "java",
            maxResults: 10,
            startIndex: currentPage + 10,
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );

      dispatch({
        type: BooksActionTypes.FETCH_MORE_BOOKS_SUCCESS,
        payload: response.data.items,
      });
    } catch (e) {
      dispatch({
        type: BooksActionTypes.FETCH_MORE_BOOKS_ERROR,
        payload: "An error occurred while loading more books",
      });
    }
  };
};
