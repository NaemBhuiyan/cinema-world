// import useURLQuery from '@/lib/hooks/useURLQuery';
import MovieCard from '@/components/MovieCard';
import { Movie } from '@/features/HomePage/api';
import MovieCastList from '@/features/MovieDetails/MovieCastList';
import { Tabs, Col, Divider, Row, Typography, List } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const { TabPane } = Tabs;

function MovieDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(['movie-details', id], () =>
    Movie.getDetails(id),
  );

  if (data?.title) {
    return (
      <>
        <Row justify="center" gutter={24}>
          <Col xs={23} sm={23} md={23} lg={18} xl={8} xxl={8}>
            <MovieCard movieInfo={data} />
          </Col>
          <Col xl={13} xxl={13} xs={23} sm={23} md={23}>
            <Typography.Title>{data?.title}</Typography.Title>
            {data?.genres.map(genre => {
              return (
                <React.Fragment key={genre.id}>
                  <Typography.Text type="secondary">
                    {genre.name}
                  </Typography.Text>
                  <Divider type="vertical" />
                </React.Fragment>
              );
            })}
            <p className="mt-4">
              <Typography.Link
                href={`https://www.imdb.com/title/${data?.imdb_id}/`}
                target="_blank"
              >
                IMDb Link
              </Typography.Link>
            </p>
            <p className="mt-4">{data?.overview}</p>

            <Tabs defaultActiveKey="1" size="large">
              <TabPane
                tab="Cast"
                key="1"
                style={{
                  height: 400,
                  overflow: 'auto',
                  // border: '1px solid rgba(140, 140, 140, 0.35)',
                  borderRadius: '4px',
                }}
              >
                <MovieCastList data={data?.credits?.cast} />
              </TabPane>
              <TabPane
                tab="Crew"
                key="2"
                style={{
                  height: 400,
                  overflow: 'auto',
                  borderRadius: '4px',
                }}
              >
                <MovieCastList data={data?.credits?.crew} />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={22}>
            <Divider orientationMargin={0} orientation="left" className="mt-5">
              <Typography.Title level={3}>Related movies</Typography.Title>
            </Divider>
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
              dataSource={data?.recommendations?.results}
              renderItem={item => (
                <List.Item>
                  <MovieCard movieInfo={item} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </>
    );
  }
  if (isLoading) {
    return 'Loading...';
  }
  if (isError) {
    return 'Data not found';
  }
}

export default MovieDetails;
