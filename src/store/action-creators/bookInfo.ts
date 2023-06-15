import axios from "axios";
import { Dispatch } from "redux";
import { BookInfoAction, BookInfoActionTypes } from "../../types/bookInfo";

export const fetchBookInfo = (id: string) => {
  return async (dispatch: Dispatch<BookInfoAction>) => {
    try {
      dispatch({ type: BookInfoActionTypes.FETCH_BOOK_INFO });
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`,
        {
          params: {
            key: process.env.REACT_APP_API_KEY,
          },
        }
      );
      const data = { id: response.data.id };
      localStorage.setItem("idBook", JSON.stringify(data));

      dispatch({
        type: BookInfoActionTypes.FETCH_BOOK_INFO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: BookInfoActionTypes.FETCH_BOOK_INFO_ERROR,
        payload: "An error occurred while loading book info",
      });
    }
  };
};
