import {
  AuthorBooksActionTypes,
  AuthorBooksState,
  AuthorBooksAction,
} from "../../types/authorBooks";

const initialState: AuthorBooksState = {
  authorBooks: [],
  authorName: "",
  loading: false,
  error: null,
  currentPage: 1,
};

export const authorBooksReducer = (
  state = initialState,
  action: AuthorBooksAction
): AuthorBooksState => {
  switch (action.type) {
    case AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS:
      return { loading: true, error: null, authorBooks: [], currentPage: 1 , authorName: ''};
    case AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS_SUCCESS:
      return {
        loading: false,
        error: null,
        authorBooks: [...state.authorBooks, ...action.payload],
        currentPage: state.currentPage + 1,
        authorName: action.payload[0].volumeInfo.authors[0],
      };
    case AuthorBooksActionTypes.FETCH_AUTHOR_BOOKS_ERROR:
      return {
        loading: false,
        error: action.payload,
        authorBooks: [],
        currentPage: 1,
        authorName: '',
      };
    case AuthorBooksActionTypes.FETCH_MORE_AUTHOR_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        authorBooks: [...state.authorBooks, ...action.payload],
      };
    case AuthorBooksActionTypes.FETCH_MORE_AUTHOR_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
