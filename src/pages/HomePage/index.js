import React, { useEffect } from 'react';
import { Card, Col, Rate, Row } from 'antd';
import { LayoutContentWrapper } from '@/styles';
import { useReactQuery } from '@/lib/hooks';
import config from '@/config';
import { Movie } from '@/features/HomePage/api';

const { Meta } = Card;

function DashboardHomePage() {
  const { data } = useReactQuery('test', Movie.getList);

  useEffect(() => {
    console.log(data?.data.results[0]);
  }, [data]);

  return (
    <LayoutContentWrapper>
      <Row>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: '100%' }}
            cover={
              <img
                alt="example"
                src={`${config.IMAGE_PATH}w300${data?.data?.results[0]?.poster_path}`}
              />
            }
          >
            <Meta title={data?.data?.results[0].title} />
            <Row align="middle" gutter={8} className="ml-0">
              <Col className="pl-0">
                <Rate allowHalf count={1} defaultValue={1} />
              </Col>
              <Col>
                <p className="mb-0 mt-1">
                  {data?.data?.results[0].vote_average}/10
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </LayoutContentWrapper>
  );
}

export default DashboardHomePage;
