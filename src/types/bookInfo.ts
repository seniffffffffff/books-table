import { BooksData } from "../interfaces/interfaces";

export interface BookInfoState {
  bookInfo: BooksData[];
  loading: boolean;
  error: null | string;
}

export enum BookInfoActionTypes {
  FETCH_BOOK_INFO = "FETCH_BOOK_INFO",
  FETCH_BOOK_INFO_SUCCESS = "FETCH_BOOK_INFO_SUCCESS",
  FETCH_BOOK_INFO_ERROR = "FETCH_BOOK_INFO_ERROR",
}

interface FetchBookInfoAction {
  type: BookInfoActionTypes.FETCH_BOOK_INFO;
}

interface FetchBookInfoSuccessAction {
  type: BookInfoActionTypes.FETCH_BOOK_INFO_SUCCESS;
  payload: BooksData;
}

interface FetchBookInfoErrorAction {
  type: BookInfoActionTypes.FETCH_BOOK_INFO_ERROR;
  payload: string;
}

export type BookInfoAction =
  | FetchBookInfoAction
  | FetchBookInfoSuccessAction
  | FetchBookInfoErrorAction;
