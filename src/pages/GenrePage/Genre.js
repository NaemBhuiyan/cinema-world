import GenreWiseMovieList from '@/features/HomePage/GenreWiseMovieList';
import { Col, Row } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

function Genre() {
  const { id } = useParams();

  return (
    <Row justify="center">
      <Col span={23}>
        <GenreWiseMovieList
          genreId={id}
          listLength={10}
          sortBy="vote_average.desc"
        />
      </Col>
    </Row>
  );
}

export default Genre;
