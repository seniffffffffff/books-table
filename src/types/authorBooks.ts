import { BooksData } from "../interfaces/interfaces";

export interface AuthorBooksState {
  authorBooks: BooksData[];
  authorName: string;
  loading: boolean;
  error: null | string;
  currentPage: number;
}

export enum AuthorBooksActionTypes {
  FETCH_AUTHOR_BOOKS = "FETCH_AUTHOR_BOOKS",
  FETCH_AUTHOR_BOOKS_SUCCESS = "FETCH_AUTHOR_BOOKS_SUCCESS",
  FETCH_AUTHOR_BOOKS_ERROR = "FETCH_AUTHOR_BOOKS_ERROR",
  FETCH_MORE_AUTHOR_BOOKS_SUCCESS = "FETCH_MORE_AUTHOR_BOOKS_SUCCESS",
  FETCH_MORE_AUTHOR_BOOKS_ERROR = "FETCH_MORE_AUTHOR_BOOKS_ERROR",
}

interface FetchAuthorBooksAction {
  type: AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS;
}

interface FetchAuthorBooksSuccessAction {
  type: AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS_SUCCESS;
  payload: BooksData[];
}

interface FetchAuthorBooksErrorAction {
  type: AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS_ERROR;
  payload: string;
}

interface FetchMoreAuthorBooksSuccessAction {
  type: AuthorBooksActionTypes.FETCH_MORE_AUTHOR_BOOKS_SUCCESS;
  payload: BooksData[];
}

interface FetchMoreAuthorBooksErrorAction {
  type: AuthorBooksActionTypes.FETCH_MORE_AUTHOR_BOOKS_ERROR;
  payload: string;
}

export type AuthorBooksAction =
  | FetchAuthorBooksAction
  | FetchAuthorBooksSuccessAction
  | FetchAuthorBooksErrorAction
  | FetchMoreAuthorBooksSuccessAction
  | FetchMoreAuthorBooksErrorAction;
