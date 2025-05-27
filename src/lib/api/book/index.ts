import { BookData, BookSearchParams } from "@/types/book";
import axios from "axios";
const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
});
export async function getBooks(params: BookSearchParams) {
  const res = await api.get<{
    documents: BookData[];
    meta: {
      is_end: boolean;
      total_count: number;
    };
  }>("/book", {
    params: params,
  });

  return res.data;
}
