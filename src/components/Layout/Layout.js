import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Topbar from '@/features/Topbar';
import { DashboardContainer } from './styles';
const { Content, Footer } = Layout;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    // flexShrink: '0',
    // position: 'relative',
    // height: '100vh',
    marginTop: '100px',
  },
};
function PageLayout({ children }) {
  return (
    <DashboardContainer>
      <Layout>
        <Topbar />
        <Content style={styles.content}>{children}</Content>
        <Footer className="text-center">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </DashboardContainer>
  );
}
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
