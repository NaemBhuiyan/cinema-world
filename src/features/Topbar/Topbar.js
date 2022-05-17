import React from 'react';
import { Layout, Row, Col, Badge, Typography, Button, Menu } from 'antd';

import TopbarWrapper from './styles';
import { AppStore } from '@/store';

import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const topMenuItems = [
  {
    label: 'Home',
    key: '/movies',
  },
  {
    label: 'Recent view',
    key: '/recently-visited',
  },
  {
    label: 'Genre',
    key: 'genre',
    children: [
      {
        key: '/genre/28?name=Action',
        label: 'Action',
      },
      {
        key: '/genre/12?name=Adventure',
        label: 'Adventure',
      },
      {
        key: '/genre/16?name=Animation',
        label: 'Animation',
      },
      {
        key: 'genre/35?name=Comedy',
        label: 'Comedy',
      },
      {
        key: 'genre/80?name=Crime',
        label: 'Crime',
      },
      {
        key: 'genre/99?name=Documentary',
        label: 'Documentary',
      },
      {
        key: 'genre/18?name=Drama',
        label: 'Drama',
      },
      {
        key: 'genre/10751?name=Family',
        label: 'Family',
      },
      {
        key: 'genre/14?name=Fantasy',
        label: 'Fantasy',
      },
      {
        key: 'genre/36?name=History',
        label: 'History',
      },
      {
        key: 'genre/27?name=Horror',
        label: 'Horror',
      },
      {
        key: 'genre/10402?name=Music',
        label: 'Music',
      },
      {
        key: 'genre/9648?name=Mystery',
        label: 'Mystery',
      },
      {
        key: 'genre/10749?name=Romance',
        label: 'Romance',
      },
      {
        key: 'genre/878?name=Science Fiction',
        label: 'Science Fiction',
      },
      {
        key: 'genre/10770?name=TV Movie',
        label: 'TV Movie',
      },
      {
        key: 'genre/53?name=Thriller',
        label: 'Thriller',
      },
      {
        key: 'genre/10752?name=War',
        label: 'War',
      },
      {
        key: 'genre/37?name=Western',
        label: 'Western',
      },
    ],
  },
];
export default function Topbar() {
  const watchList = AppStore(state => state.watchList);
  const navigate = useNavigate();

  const goToCatagoriesMovieList = e => navigate(e.key);

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

          <Col span={10}>
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
