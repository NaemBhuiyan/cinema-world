import React from 'react';
import { Layout, Row, Col, Badge, Typography, Button } from 'antd';

import TopbarWrapper from './styles';
import { AppStore } from '@/store';

const { Header } = Layout;

export default function Topbar() {
  const watchList = AppStore(state => state.watchList);

  return (
    <TopbarWrapper>
      <Header className="header shadow-long">
        <Row
          style={{ height: '100%' }}
          type="flex"
          justify="space-between"
          align="middle"
        >
          <Col>
            <Button href="/movies" type="text">
              <h4>
                <Typography.Text italic type="success">
                  Cinema World
                </Typography.Text>
              </h4>
            </Button>
          </Col>

          <Col>
            <Row
              className="header-right"
              type="flex"
              justify="end"
              align="middle"
              gutter={[25, 0]}
            >
              <Col>
                <Badge count={watchList?.length} offset={[7, 5]} showZero>
                  <Button type="link" href="/watch-list" className="px-0">
                    Watch List
                  </Button>
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </TopbarWrapper>
  );
}
