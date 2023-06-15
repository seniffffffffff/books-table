import {
  BookInfoState,
  BookInfoAction,
  BookInfoActionTypes,
} from "./../../types/bookInfo";

const initialState: BookInfoState = {
  bookInfo: [],
  loading: false,
  error: null,
};

export const bookInfoReducer = (
  state = initialState,
  action: BookInfoAction
): BookInfoState => {
  switch (action.type) {
    case BookInfoActionTypes.FETCH_BOOK_INFO:
      return { loading: true, error: null, bookInfo: [] };
    case BookInfoActionTypes.FETCH_BOOK_INFO_SUCCESS:
      return {
        loading: false,
        error: null,
        bookInfo: [action.payload],
      };
    case BookInfoActionTypes.FETCH_BOOK_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
