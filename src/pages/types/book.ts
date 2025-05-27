export type searchTarget = "title" | "isbn" | "person" | "publisher";
export type sortType = "accuracy" | "latest";

export interface SelectBoxOptionType<T> {
  title: string;
  value: T;
}

export type BookSearchTargetType = SelectBoxOptionType<searchTarget>;

export type BookSearchParams = {
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
