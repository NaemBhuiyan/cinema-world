import React, { memo } from "react";
import { Layout, Row, Col, Badge, Typography, Button, Menu } from "antd";

import TopbarWrapper from "./styles";
import { AppStore } from "../../store";

import { useNavigate } from "react-router-dom";
import { topMenuItems } from "./menuItems";

const { Header } = Layout;

function Topbar() {
  const watchList = AppStore((state) => state.watchList);
  const navigate = useNavigate();

  const goToCatagoriesMovieList = (e) => navigate(e.key);

  return (
    <TopbarWrapper>
      <Header className="header shadow-long">
        <Row
          style={{ height: "100%" }}
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

          <Col span={7}>
            <Menu
              items={topMenuItems}
              mode="horizontal"
              onClick={goToCatagoriesMovieList}
            />
          </Col>

          <Col>
            <Row
              className="header-right"
              type="flex"
              justify="end"
              align="mkeydle"
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

export default memo(Topbar);
