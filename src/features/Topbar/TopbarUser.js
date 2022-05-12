import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { UserOutlined } from '@ant-design/icons';
import { AuthStore } from '@/store';

const { Item } = Menu;

const MenuItem = styled(Item)`
  padding: 1rem 10rem 1rem 3rem;
`;
export default function TopbarUser() {
  const logoutAction = AuthStore(state => state.logout);
  const logOut = () => logoutAction();

  useEffect(() => document.removeEventListener('click', logOut, false), []);

  const menu = (
    <Menu>
      <MenuItem key="1">
        <Link to="/dashboard/settings">
          <FormattedMessage id="Settings" />
        </Link>
      </MenuItem>
      <MenuItem key="2" onClick={() => logOut()}>
        <FormattedMessage id="Logout" />
      </MenuItem>
    </Menu>
  );

  return (
    <Dropdown placement="bottomRight" overlay={menu} trigger="click">
      <Avatar
        size={40}
        src="https://muzotakt.pl/wp-content/uploads/2017/05/Thom-Yorke-1200x900.jpg"
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
}
