import React from 'react';
import { Genre } from '@/features/genre/api';
// import { useReactQuery } from '@/lib/hooks';
import { Button, Col, Divider, Row, Typography } from 'antd';
import GenreWiseMovieList from './GenreWiseMovieList';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

function GenreList() {
  const genreList = useQuery('genreList', () => Genre.getList());
  const navigate = useNavigate();

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
                <GenreWiseMovieList
                  key={genre.id + 1}
                  genreId={genre.id}
                  listLength={5}
                />
                <Button
                  size="large"
                  type="primary"
                  onClick={() =>
                    navigate(`/genre/${genre.id}?name=${genre.name}`)
                  }
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
