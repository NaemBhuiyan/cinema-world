import { apiUrl, movieListUrl } from "../../api/endpoints";
import config from "../../config";
import { http } from "../../services";

export const genreListUrl = `${apiUrl}genre/movie/list?api_key=${config.API_KEY}`;

export const Genre = {
  getList: async () => {
    const res = await http.get(genreListUrl);
    return res?.data?.genres;
  },
  genreWiseMovieList: async (genreId, page = 1, sortBy = "") => {
    const res = await http.get(
      `${movieListUrl}&with_genres=${genreId}&page=${page}&sort_by=${sortBy}&vote_count.gte=10`
    );
    return res?.data?.results;
  },
};
