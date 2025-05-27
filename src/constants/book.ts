import { BookSearchTargetType } from "@/types/book";

export const BOOK_SEARCH_TARGET_SORT: BookSearchTargetType[] = [
  {
    title: "제목",
    value: "title",
  },
  { title: "저자명", value: "person" },
  { title: "출판사", value: "publisher" },
];
