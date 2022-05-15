import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Genre } from '../genre/api';
import { useInView } from 'react-intersection-observer';
import MovieCard from '@/components/MovieCard';
import { Col, Row } from 'antd';

function GenreWiseMovieList({ genreId, listLength, sortBy }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // if list name in widow view API will call
  useEffect(async () => {
    if (inView) {
      try {
        const res = await Genre.genreWiseMovieList(genreId, 1, sortBy);
        if (res.length) {
          setData(res.slice(0, listLength));
          setLoading(false);
        }
      } catch (error) {
        setError(true);
      }
    }
  }, [inView, sortBy]);

  if (loading) {
    return <p ref={ref}>Loading</p>;
  }
  if (error) {
    return <p ref={ref}>Data not found, something went wrong</p>;
  }

  if (data?.length) {
    return (
      <>
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
}

GenreWiseMovieList.propTypes = {
  genreId: PropTypes.string,
  listLength: PropTypes.number,
  sortBy: PropTypes.string,
};

GenreWiseMovieList.defaultProps = {
  sortBy: '',
};

export default GenreWiseMovieList;
