import React from 'react';
import PropTypes from 'prop-types';
import config from '@/config';
import { Button, Card, Col, Rate, Row } from 'antd';
import notFoundImg from '../assets/image-not-found.png';
import { useNavigate } from 'react-router-dom';
import { PlusCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
import { AppStore } from '@/store';
const { Meta } = Card;

function MovieCard({ movieInfo, isLoading }) {
  const navigate = useNavigate();
  const setWatchList = AppStore(state => state.setWatchList);
  const watchList = AppStore(state => state.watchList);
  const removeFromWatchList = AppStore(state => state.removeFromWatchList);

  const isAddedToWatchList = watchList.some(item => item.id === movieInfo.id);

  const handleClick = () => navigate(`/movies/${movieInfo.id}`);
  const handleAddWatchList = e => {
    e.stopPropagation();

    if (!isAddedToWatchList) {
      setWatchList(movieInfo);
    } else {
      console.log(isAddedToWatchList);
      removeFromWatchList(movieInfo);
    }
  };

  return (
    <Card
      loading={isLoading}
      onClick={handleClick}
      hoverable
      cover={
        <img
          alt="example"
          src={
            `${config.IMAGE_PATH}w300${movieInfo?.poster_path}` ?? notFoundImg
          }
        />
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
        <Col>
          <Button
            onClick={handleAddWatchList}
            icon={
              isAddedToWatchList ? <PlusCircleFilled /> : <PlusCircleOutlined />
            }
          />
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
