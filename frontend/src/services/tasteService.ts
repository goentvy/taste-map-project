import type { TastePlace } from "../types/tastePlace";

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const fetchTastePlaces = async (region: string): Promise<TastePlace[]> => {
  const res = await fetch(`${BASE_URL}/api/taste?region=${region}`);
  if (!res.ok) throw new Error("API 요청 실패");
  return await res.json();
};