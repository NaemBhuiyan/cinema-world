import React from 'react';
import { Genre } from '@/features/genre/api';
// import { useReactQuery } from '@/lib/hooks';
import { Button, Col, Divider, Row, Typography } from 'antd';
import MovieList from './MovieList';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

function GenreList() {
  const genreList = useQuery('genreList', () => Genre.getList());
  const navigate = useNavigate();

  const handleClickViewMore = genre =>
    navigate(`/genre/${genre.id}?name=${genre.name}`);

  return (
    <Row justify="center">
      <Col span={23}>
        {genreList?.data?.length &&
          genreList.data.map(genre => {
            return (
              <>
                <Divider
                  orientationMargin={0}
                  key={genre.id}
                  orientation="left"
                  className="mt-5"
                >
                  <Typography.Title level={3}>{genre.name}</Typography.Title>
                </Divider>
                <MovieList
                  key={genre.id + 1}
                  genreId={genre.id}
                  listLength={5}
                />
                <Button
                  size="large"
                  type="primary"
                  onClick={() => handleClickViewMore(genre)}
                >
                  View {genre.name} List
                </Button>
              </>
            );
          })}
      </Col>
    </Row>
  );
}

export default GenreList;
