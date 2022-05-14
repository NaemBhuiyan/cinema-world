import React from 'react';
import PropTypes from 'prop-types';
import { Genre } from '../genre/api';
import { useQuery } from 'react-query';
import MovieCard from '@/components/MovieCard';
import { Col, Row } from 'antd';

function GenreWiseMovieList({ genre }) {
  const { data, isLoading } = useQuery(['catagories-movie-list', genre], () =>
    Genre.genreWiseMovieList(genre),
  );

  if (data?.length) {
    return (
      <Row gutter={30} className="mb-5">
        {data.slice(0, 5).map(movie => (
          <Col key={movie.id} span={5} className="my-3">
            <MovieCard movie={movie} isLoading={isLoading} />
          </Col>
        ))}
      </Row>
    );
  }
  return 'Data not found';
  // return (
  //   movieList?.data?.length &&
  //   movieList?.data?.map(movie => <MovieCard key={movie.id} movie={movie} />)
  // );
}

GenreWiseMovieList.propTypes = {
  genre: PropTypes.object,
};

export default GenreWiseMovieList;
