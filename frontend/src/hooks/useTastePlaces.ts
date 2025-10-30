import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";
import type { TastePlace } from "../types/tastePlace";
import toast from "react-hot-toast";

const fetchTastePlaces = async (region: string): Promise<TastePlace[]> => {
  try {
    const res = await axiosInstance.get(`/api/taste/${region}`);
    toast.success(`${region} 맛집 데이터를 불러왔습니다!`);
    return res.data;
  } catch (error) {
    // axios는 error.response, error.message 등 다양한 정보를 제공함
    toast.error("맛집 데이터를 불러오는데 실패했습니다.");
    throw error;
  }
};

export const useTastePlaces = (region: string) => {
  return useQuery({
    queryKey: ["tastePlaces", region],
    queryFn: () => fetchTastePlaces(region),
    enabled: !!region, // region이 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });
};