import React, { useEffect } from 'react';
import { Card, Col, Divider, Rate, Row } from 'antd';
import config from '@/config';
import { Movie } from '@/features/HomePage/api';
import { useQueries } from 'react-query';
import { Genre } from '@/features/genre/api';

const { Meta } = Card;

function DashboardHomePage() {
  // const { data } = useReactQuery('movie-list', Movie.getList);

  const [movieList, genreList] = useQueries([
    { queryKey: 'movie-list', queryFn: () => Movie.getList() },
    { queryKey: 'post', queryFn: () => Genre.getList() },
  ]);

  useEffect(() => {
    console.log(movieList?.data, genreList.data);
  }, [movieList, genreList]);

  return (
    <>
      <Row justify="center">
        <Col span={23}>
          {genreList?.data?.length &&
            genreList.data.map(genre => {
              return (
                <Divider
                  orientationMargin={0}
                  key={genre.id}
                  orientation="left"
                >
                  {genre.name}
                </Divider>
              );
            })}
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          {movieList?.data?.length && (
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src={`${config.IMAGE_PATH}w300${movieList?.data[0]?.poster_path}`}
                />
              }
            >
              <Meta title={movieList?.data[0]?.title} />
              <Row align="middle" gutter={8} className="ml-0">
                <Col className="pl-0">
                  <Rate allowHalf count={1} defaultValue={1} />
                </Col>
                <Col>
                  <p className="mb-0 mt-1">
                    {movieList?.data[0]?.vote_average}/10
                  </p>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
}

export default DashboardHomePage;
