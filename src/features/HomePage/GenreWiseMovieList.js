import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Genre } from '../genre/api';
import { useInView } from 'react-intersection-observer';
import MovieCard from '@/components/MovieCard';
import { Col, Row, Typography } from 'antd';
import useURLQuery from '@/lib/hooks/useURLQuery';

function GenreWiseMovieList({ genreId, listLength, sortBy }) {
  const [data, setData] = useState();
  const urlQuery = useURLQuery();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(async () => {
    if (inView) {
      const res = await Genre.genreWiseMovieList(genreId, 1, sortBy);
      if (res.length) {
        setData(res.slice(0, listLength));
      }
    }
  }, [inView]);

  if (data?.length) {
    return (
      <>
        <Typography.Title className="mb-5">
          {' '}
          {urlQuery.get('name')}
        </Typography.Title>
        <Row gutter={18} className="mb-5" ref={ref} key={genreId}>
          {data.map(movie => (
            <Col flex="auto" key={movie.id} span={6} className="my-3">
              <MovieCard movie={movie} isLoading={false} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
  return <p ref={ref}>Data not found</p>;
}

GenreWiseMovieList.propTypes = {
  genreId: PropTypes.number,
  listLength: PropTypes.number,
  sortBy: PropTypes.string,
};

export default GenreWiseMovieList;
