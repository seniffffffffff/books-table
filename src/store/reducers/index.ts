import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { authorBooksReducer } from "./authorBooksReducer";
import { bookInfoReducer } from "./bookInfoReducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  authorBooks: authorBooksReducer,
  bookInfo: bookInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
