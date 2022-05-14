import { apiUrl } from '@/api/endpoints';
import { http } from '@/services';

export const movieListUrl = `${apiUrl}genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e`;
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

export const Genre = {
  getList: async () => {
    const res = await http.get(movieListUrl);
    return res?.data?.genres;
  },
};
