export type searchTarget = "title" | "isbn" | "person" | "publisher";
export type sortType = "accuracy" | "latest";

export type SearchBooksParams = {
  query: string;
  sort?: sortType;
  page?: number;
  size?: number;
  target?: searchTarget;
};

export interface BookData {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}
