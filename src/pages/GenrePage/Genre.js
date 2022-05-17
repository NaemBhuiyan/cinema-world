import React, { useState } from 'react';
import MovieList from '@/components/MovieList';
import { Col, Row, Typography, Segmented } from 'antd';
import { useParams } from 'react-router-dom';
import useURLQuery from '@/lib/hooks/useURLQuery';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

const sortOptions = [
  {
    label: 'Top rated',
    value: 'vote_average.desc',
    icon: <BarsOutlined />,
  },
  {
    label: 'Popular',
    value: 'popularity.desc',
    icon: <AppstoreOutlined />,
  },
];

function Genre() {
  const { id } = useParams();
  const urlQuery = useURLQuery();

  const [sortListBy, setSortListBy] = useState(sortOptions[1].value);

  const handleSortChange = e => setSortListBy(e);

  return (
    <Row justify="center">
      <Col span={23}>
        <Row
          gutter={40}
          justify="space-between"
          align="middle"
          className="my-5"
        >
          <Col span={'auto'}>
            <Typography.Title className="mb-0">
              {' '}
              {urlQuery.get('name')}
            </Typography.Title>
          </Col>
          <Col span={'auto'}>
            <Segmented
              size="large"
              onChange={handleSortChange}
              defaultValue={sortListBy}
              options={sortOptions}
            />
          </Col>
        </Row>
        <MovieList genreId={id} listLength={10} sortBy={sortListBy} />
      </Col>
    </Row>
  );
}

export default Genre;
