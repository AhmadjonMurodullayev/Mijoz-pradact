import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request'

export const usStaticaGet = () => {
  return (
    useQuery({
      queryKey: ['statica'],
      queryFn: ()=> request.get('/stats').then(res => res.data),
      onError: (error) => {
        console.log(error);
      },
    })
  )
}
