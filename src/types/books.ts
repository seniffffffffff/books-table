import { BooksData } from "../interfaces/interfaces";

export interface BooksState {
  books: BooksData[];
  loading: boolean;
  error: null | string;
  currentPage: number;
}

export enum BooksActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
  FETCH_MORE_BOOKS_SUCCESS = "FETCH_MORE_BOOKS_SUCCESS",
  FETCH_MORE_BOOKS_ERROR = "FETCH_MORE_BOOKS_ERROR",
}

interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
  payload: BooksData[];
}

interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR;
  payload: string;
}

interface FetchMoreBooksSuccessAction {
  type: BooksActionTypes.FETCH_MORE_BOOKS_SUCCESS;
  payload: BooksData[];
}

interface FetchMoreBooksErrorAction {
  type: BooksActionTypes.FETCH_MORE_BOOKS_ERROR;
  payload: string;
}

export type BooksAction =
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction
  | FetchMoreBooksSuccessAction
  | FetchMoreBooksErrorAction;
