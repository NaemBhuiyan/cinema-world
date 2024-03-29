import React, { useEffect } from "react";

import { Tabs, Col, Divider, Row, Typography, List } from "antd";
import { useParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard";
import MovieCastList from "../../features/MovieDetails/MovieCastList";
import { useFatchDetails } from "../../features/MovieDetails/useFatchDetails";
import { AppStore } from "../../store";

const { TabPane } = Tabs;

const style = {
  height: 400,
  overflow: "auto",
  borderRadius: "4px",
};

function MovieDetails() {
  const { id } = useParams();
  const saveToVisited = AppStore((state) => state.saveToVisited);
  const recentlyVisited = AppStore((state) => state.recentlyVisited);

  const { data, isLoading, isError, isSuccess, refetch } = useFatchDetails(id);

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  useEffect(() => {
    const isVisited = recentlyVisited.some((item) => item.id === data?.id);
    if (isSuccess && !isVisited) {
      saveToVisited({
        id: data?.id,
        title: data?.title,
        vote_average: data?.vote_average,
        poster_path: data?.poster_path,
      });
    }
  }, [
    data?.id,
    data?.poster_path,
    data?.title,
    data?.vote_average,
    isSuccess,
    recentlyVisited,
    saveToVisited,
  ]);

  if (isLoading) {
    return (
      <Row
        style={{
          height: "100vh",
        }}
        data-testid="loader"
      >
        <Col>Loading...</Col>
      </Row>
    );
  }
  if (isError) {
    console.log(isError);
    return (
      <Row
        style={{
          height: "100vh",
        }}
      >
        <Col>Data not found</Col>
      </Row>
    );
  }

  if (isSuccess) {
    return (
      <>
        <Row justify="center" gutter={24}>
          <Col
            xs={23}
            sm={23}
            md={23}
            lg={18}
            xl={8}
            xxl={8}
            className="mb-5 mb-lg-0"
          >
            <MovieCard movieInfo={data} />
          </Col>
          <Col xl={13} xxl={13} xs={23} sm={23} md={23}>
            <Typography.Title>{data?.title}</Typography.Title>
            {data?.genres.map((genre) => {
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
              <TabPane tab="Cast" key="1" style={style}>
                <MovieCastList data={data?.credits?.cast} />
              </TabPane>
              <TabPane tab="Crew" key="2" style={style}>
                <MovieCastList data={data?.credits?.crew} />
              </TabPane>
              <TabPane tab="Trailer" key="3" style={style}>
                {data.videos?.results[0]?.key ? (
                  <iframe
                    title="youtube"
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${data.videos?.results[0].key}`}
                  ></iframe>
                ) : (
                  <Typography.Text type="danger">
                    {" "}
                    No trailer founded
                  </Typography.Text>
                )}
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
              renderItem={(item) => (
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
}

export default MovieDetails;
