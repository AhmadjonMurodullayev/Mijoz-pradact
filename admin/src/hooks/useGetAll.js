import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useGetAll = (id) => {
  return useQuery({
    queryKey: ["bino", id],
    queryFn: () => request.get(`/bino/${id}`).then((res) => res.data),
    onError: (data) => {
      console.log(data);},
  });
};
