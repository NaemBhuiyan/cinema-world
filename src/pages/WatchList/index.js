import React from "react";
import MovieCard from "../../components/MovieCard";
import { AppStore } from "../../store";
import { Col, Divider, List, Row, Typography } from "antd";

function WatchList() {
  const watchList = AppStore((state) => state.watchList);
  return (
    <Row justify="center">
      <Col span={22}>
        <Divider orientationMargin={0} orientation="left" className="mt-5">
          <Typography.Title level={3}>Watch listed movies</Typography.Title>
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
          dataSource={watchList}
          renderItem={(item) => (
            <List.Item>
              <MovieCard movieInfo={item} />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

export default WatchList;
