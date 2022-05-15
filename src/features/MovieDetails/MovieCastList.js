import React from 'react';
import PropTypes from 'prop-types';
import { List, Card } from 'antd';
import notFoundImg from '../../assets/image-not-found.png';
import config from '@/config';

function MovieCastList({ data }) {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 6,
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card
            cover={
              item?.profile_path ? (
                <img
                  alt="example"
                  src={`${config.IMAGE_PATH}w200${item?.profile_path}`}
                />
              ) : (
                <img src={notFoundImg}></img>
              )
            }
            style={{
              height: '100%',
            }}
          >
            <Card.Meta
              title={item.original_name}
              description={item.known_for_department}
            />
          </Card>
        </List.Item>
      )}
    />
  );
}

MovieCastList.propTypes = {
  data: PropTypes.array,
};
MovieCastList.default = {
  data: [],
};

export default MovieCastList;
