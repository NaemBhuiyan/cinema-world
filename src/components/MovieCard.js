import React from 'react';
import PropTypes from 'prop-types';
import config from '@/config';
import { Card, Col, Rate, Row } from 'antd';
import notFoundImg from '../assets/image-not-found.png';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function MovieCard({ movieInfo, isLoading }) {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/movies/${movieInfo.id}`);

  return (
    <Card
      loading={isLoading}
      onClick={handleClick}
      hoverable
      cover={
        movieInfo?.poster_path ? (
          <img
            alt="example"
            src={`${config.IMAGE_PATH}w300${movieInfo?.poster_path}`}
          />
        ) : (
          <img alt="example" src={notFoundImg} />
        )
      }
      style={{
        height: '100%',
      }}
    >
      <Meta title={movieInfo?.title} />
      <Row align="middle" gutter={8} className="ml-0">
        <Col className="pl-0">
          <Rate allowHalf count={1} defaultValue={1} />
        </Col>
        <Col>
          <p className="mb-0 mt-1">{movieInfo?.vote_average}/10</p>
        </Col>
      </Row>
    </Card>
  );
}

MovieCard.propTypes = {
  movieInfo: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default MovieCard;
