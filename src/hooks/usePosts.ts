import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axios';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await axiosInstance.get('/posts');
      return res.data;
    },
  });
};
