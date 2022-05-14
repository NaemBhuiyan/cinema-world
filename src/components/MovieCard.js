import React from 'react';
import PropTypes from 'prop-types';
import config from '@/config';
import { Card, Col, Rate, Row } from 'antd';
import notFoundImg from '../assets/image-not-found.png';
const { Meta } = Card;

function MovieCard({ movie, isLoading }) {
  return (
    <Card
      loading={isLoading}
      hoverable
      cover={
        movie?.poster_path ? (
          <img
            alt="example"
            src={`${config.IMAGE_PATH}w300${movie?.poster_path}`}
          />
        ) : (
          <img
            alt="example"
            src={notFoundImg}
            style={{
              height: '100%',
              maxHeight: 500,
            }}
          />
        )
      }
      style={{
        height: '100%',
      }}
    >
      <Meta title={movie?.title} />
      <Row align="middle" gutter={8} className="ml-0">
        <Col className="pl-0">
          <Rate allowHalf count={1} defaultValue={1} />
        </Col>
        <Col>
          <p className="mb-0 mt-1">{movie?.vote_average}/10</p>
        </Col>
      </Row>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default MovieCard;
