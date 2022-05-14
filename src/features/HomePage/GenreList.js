import React from 'react';
import { Genre } from '@/features/genre/api';
// import { useReactQuery } from '@/lib/hooks';
import { Col, Divider, Row, Typography } from 'antd';
import GenreWiseMovieList from './GenreWiseMovieList';
import { useQuery } from 'react-query';

function GenreList() {
  const genreList = useQuery('genreList', () => Genre.getList());
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
                <GenreWiseMovieList key={genre.id + 1} genre={genre} />
              </>
            );
          })}
      </Col>
    </Row>
  );
}

export default GenreList;
