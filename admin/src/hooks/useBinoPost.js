import { useMutation } from '@tanstack/react-query'
import { request } from '../config/request'
import { client } from '../config/query-clinet'

export const useBinoPost = () => {
  return (
  useMutation({
     mutationFn:(data) => request.post("/bino",data).then(res => res.data),
     onSuccess:(data) => {
         client.invalidateQueries(['bino']);
     },
     onError:(error) => {
         console.log(error);
     }
  })
  )
}
