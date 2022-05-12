import React, { useEffect, useState } from 'react';
import { Row, Divider } from 'antd';
import styled from 'styled-components';
import { Navigate, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { LangSwitch } from '@/features/Topbar';
import { AuthStore } from '@/store';
import UserAuthForm from './UserAuthForm';

const RowWrapper = styled(Row)`
  background-image: url('https://cutewallpaper.org/21/js-wallpaper/Jay-Welborn-Beginning-React.jpg');
  height: 100vh;
  position: relative;

  .login-content {
    width: 60rem;
    padding: 5rem;
    box-shadow: ${props => props.theme.lightShadow};
    background-color: #fff;
    border-radius: 0.6rem;
  }
`;

const LangSwithcer = styled(LangSwitch)`
  position: absolute;
  top: 3rem;
  right: 3rem;
`;

function UserAuth() {
  const location = useLocation();
  const token = AuthStore(state => state.token);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  useEffect(() => {
    if (token) {
      setRedirectToReferrer(true);
    }
  }, [token]);

  const { from } = location.state || { from: { pathname: '/dashboard' } };

  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }
  return (
    <RowWrapper type="flex" justify="center" align="middle">
      <LangSwithcer />
      <div className="login-content">
        <h1 className="text-center">
          <FormattedMessage id="Login" />
        </h1>
        <Divider />
        <UserAuthForm />
      </div>
    </RowWrapper>
  );
}

export default UserAuth;
