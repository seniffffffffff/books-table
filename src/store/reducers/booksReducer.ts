import { BooksAction, BooksActionTypes, BooksState } from "../../types/books";

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
  currentPage: 1,
};

export const booksReducer = (
  state = initialState,
  action: BooksAction
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return { loading: true, error: null, books: [], currentPage: 1 };
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        error: null,
        books: [...state.books, ...action.payload],
        currentPage: state.currentPage + 1,
      };
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return {
        loading: false,
        error: action.payload,
        books: [],
        currentPage: 1,
      };
    case BooksActionTypes.FETCH_MORE_BOOKS_SUCCESS:
      return {
        ...state,
        books: [...state.books, ...action.payload],
        currentPage: state.currentPage + 1,
      };
    case BooksActionTypes.FETCH_MORE_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
