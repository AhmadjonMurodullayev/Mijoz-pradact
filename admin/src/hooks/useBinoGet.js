import { useQuery } from '@tanstack/react-query'
import { request } from '../config/request';

export const useBinoGet = () => {
  return (
    useQuery({
        queryKey: ['bino'],
        queryFn: ()=> request.get('/bino').then((res) => res.data),
        onError: (error) => {
          console.log(error);
        },
    })
  )
}
