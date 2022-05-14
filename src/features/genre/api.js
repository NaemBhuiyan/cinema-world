import { apiUrl, movieListUrl } from '@/api/endpoints';
import { http } from '@/services';

export const genreListUrl = `${apiUrl}genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e`;
// export const GenreWiseMovieListUrl = `${movieListUrl}`;
// https://api.themoviedb.org/3/discover/movie?api_key=cd890f94a756b1518a2a17617a5b430e&with_genres=28&page=1

export const Genre = {
  getList: async () => {
    const res = await http.get(genreListUrl);
    return res?.data?.genres;
  },
  genreWiseMovieList: async (genre, page = 1) => {
    const res = await http.get(
      `${movieListUrl}&with_genres=${genre.id}&page=${page}`,
    );
    return res?.data?.results;
  },
};