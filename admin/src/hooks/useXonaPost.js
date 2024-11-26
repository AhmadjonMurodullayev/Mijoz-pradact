import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";

export const useXonaPost = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.post(`/bino/${id}/xonalar`, data).then((res) => res.data),
    onSuccess: (data) => {
      console.log("Xona muvaffaqiyatli qo'shildi:", data);
    },
    onError: (error) => {
      console.error("Xona qo'shishda xatolik yuz berdi:", error);
    },
  });
};
