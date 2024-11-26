import { useMutation } from "@tanstack/react-query";
import { request } from "../config/request";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => request.post("/register", data).then((res) => res.data),
    onSuccess: (data) => {
        console.log(data);
        
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
