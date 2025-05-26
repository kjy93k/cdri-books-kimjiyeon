import axios, { AxiosError } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, ...params } = req.query;
  const BASE_URL = "https://dapi.kakao.com/v3/search/book";

  if (!query) {
    return res.status(400).json({ error: "검색어가 없습니다." });
  }

  try {
    const kakaoRes = await axios.get(BASE_URL, {
      params: { query, ...params },
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
      },
    });

    return res.status(200).json(kakaoRes.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    const status = axiosError.response?.status ?? 500;
    const data = axiosError.response?.data ?? { message: axiosError.message };
    return res.status(status).json(data);
  }
}
