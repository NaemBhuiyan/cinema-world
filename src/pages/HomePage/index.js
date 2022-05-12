import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import { LayoutContentWrapper, LayoutContent } from '@/styles';
import { useReactQuery } from '@/lib/hooks';
import { Auth } from '@/features/UserAuth/api';

function DashboardHomePage() {
  const { data } = useReactQuery('test', Auth.test());

  useEffect(() => {
    console.log(data?.data);
  }, [data]);

  return (
    <LayoutContentWrapper>
      <LayoutContent className="shadow">
        <Typography.Title>
          <FormattedMessage id="Home Page" />
        </Typography.Title>
      </LayoutContent>
    </LayoutContentWrapper>
  );
}

export default DashboardHomePage;
