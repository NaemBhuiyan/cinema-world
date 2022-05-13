import { apiUrl } from '@/api/endpoints';
import { http } from '@/services';

export const movieListUrl = `${apiUrl}discover/movie?api_key=cd890f94a756b1518a2a17617a5b430e`;
// https://api.themoviedb.org/3/movie/862?api_key=cd890f94a756b1518a2a17617a5b430e

export const Movie = {
  getList: () => http.get(movieListUrl),
};
