import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Genre } from '@/features/genre/api';
import { useInView } from 'react-intersection-observer';
import MovieCard from '@/components/MovieCard';
import { List } from 'antd';

function MovieList({ genreId, listLength, sortBy }) {
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
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 5,
            xl: 5,
            xxl: 5,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <MovieCard movieInfo={item} />
            </List.Item>
          )}
        />
      </>
    );
  }
}

MovieList.propTypes = {
  genreId: PropTypes.string,
  listLength: PropTypes.number,
  sortBy: PropTypes.string,
};

MovieList.defaultProps = {
  sortBy: '',
};

export default MovieList;