import React from 'react';
import { Layout, Row, Col, Badge } from 'antd';

import TopbarWrapper from './styles';

const { Header } = Layout;

export default function Topbar() {
  // eslint-disable-next-line prettier/prettier

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
            <h4>LOGO</h4>
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
                <Badge count={9} offset={[7, -5]}>
                  <a href="#">Watch List</a>
                </Badge>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </TopbarWrapper>
  );
}
