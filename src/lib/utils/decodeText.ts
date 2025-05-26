import { decode } from "entities";

export const decodeText = (text: string) => {
  return decode(text).replace(/\s{2,}/g, "\n");
};
