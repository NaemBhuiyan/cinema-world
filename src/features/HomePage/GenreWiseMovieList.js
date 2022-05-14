import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Genre } from '../genre/api';
import { useInView } from 'react-intersection-observer';
import MovieCard from '@/components/MovieCard';
import { Col, Row } from 'antd';

function GenreWiseMovieList({ genre }) {
  const [data, setData] = useState();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(async () => {
    if (inView) {
      const res = await Genre.genreWiseMovieList(genre);
      if (res.length) {
        setData(res);
      }
    }
  }, [inView]);

  if (data?.length) {
    return (
      <Row gutter={30} className="mb-5" ref={ref} key={genre.id}>
        {data.slice(0, 5).map(movie => (
          <Col key={movie.id} span={5} className="my-3">
            <MovieCard movie={movie} isLoading={false} />
          </Col>
        ))}
      </Row>
    );
  }
  return <p ref={ref}>Data not found</p>;
}

GenreWiseMovieList.propTypes = {
  genre: PropTypes.object,
};

export default GenreWiseMovieList;
