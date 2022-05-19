import config from "../config";

export const apiUrl = `${config.BACKEND_ROOT_URL}`;

export const movieListUrl = `${apiUrl}discover/movie?api_key=${config.API_KEY}`;
