import { movieListUrl } from '@/api/endpoints';
import { http } from '@/services';

export const Movie = {
  getList: async () => {
    const res = await http.get(movieListUrl);
    return res?.data?.results;
  },
};
