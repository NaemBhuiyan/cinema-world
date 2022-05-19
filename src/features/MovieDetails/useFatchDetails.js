import { Movie } from "../HomePage/api";
import { useQuery } from "react-query";

export const useFatchDetails = (id) => {
  const { data, isLoading, isError, isSuccess, refetch } = useQuery(
    "movie-details",
    () => Movie.getDetails(id)
  );

  return { data, isLoading, isError, isSuccess, refetch };
};
