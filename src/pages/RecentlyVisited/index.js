import React from 'react';
import MovieCard from '@/components/MovieCard';
import { AppStore } from '@/store';
import { Col, Divider, List, Row, Typography } from 'antd';

function RecentlyVisited() {
  const recentlyVisited = AppStore(state => state.recentlyVisited);
  return (
    <Row
      justify="center"
      style={{
        height: '100vh',
      }}
    >
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
          dataSource={recentlyVisited}
          renderItem={item => (
            <List.Item>
              <MovieCard movieInfo={item} />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

export default RecentlyVisited;
