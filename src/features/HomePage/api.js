import { apiUrl, movieListUrl } from '@/api/endpoints';
import config from '@/config';
import { http } from '@/services';

export const Movie = {
  getList: async () => {
    const res = await http.get(movieListUrl);
    return res?.data?.results;
  },
  getDetails: async movieId => {
    const res = await http.get(
      `${apiUrl}movie/${movieId}?api_key=${config.API_KEY}&append_to_response=videos,credits,recommendations`,
    );
    return res.data;
  },
};
