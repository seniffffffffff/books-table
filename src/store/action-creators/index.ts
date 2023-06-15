import * as BooksActionCretors from "./books";
import * as AuthorBooksActionCretors from "./authorBooks";
import * as BookInfoActionCretors from "./bookInfo";

export default {
  ...BooksActionCretors,
  ...AuthorBooksActionCretors,
  ...BookInfoActionCretors,
};
