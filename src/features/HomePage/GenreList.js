import React, { Fragment } from 'react';
import { Genre } from '@/features/genre/api';
// import { useReactQuery } from '@/lib/hooks';
import { Button, Col, Divider, Row, Typography } from 'antd';
import MovieList from '../../components/MovieList';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

function GenreList() {
  const genreList = useQuery('genreList', () => Genre.getList());
  const navigate = useNavigate();

  const goToCatagoriesMovieList = genre =>
    navigate(`/genre/${genre.id}?name=${genre.name}`);

  return (
    <Row justify="center">
      <Col span={23}>
        {genreList?.data?.length &&
          genreList.data.map(genre => {
            return (
              <Fragment key={genre.id}>
                <Divider
                  orientationMargin={0}
                  orientation="left"
                  className="mt-5"
                >
                  <Typography.Title level={3}>{genre.name}</Typography.Title>
                </Divider>
                <MovieList genreId={genre.id} listLength={5} />
                <Button
                  size="large"
                  type="primary"
                  onClick={() => goToCatagoriesMovieList(genre)}
                >
                  View {genre.name} List
                </Button>
              </Fragment>
            );
          })}
      </Col>
    </Row>
  );
}

export default GenreList;
