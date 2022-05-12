import React from 'react';
import { Layout, Row, Col } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import shallow from 'zustand/shallow';
import { AppStore } from '@/store';
import TopbarWrapper from './styles';
import TopBarLangSwitch from './TopbarLangSwitch';
import TopbarUser from './TopbarUser';

const { Header } = Layout;

export default function Topbar() {
  const [collapsed, openDrawer, toggleCollapsed] = AppStore(
    state => [state.collapsed, state.openDrawer, state.toggleCollapsed],
    shallow,
  );

  const handleToggle = React.useCallback(() => toggleCollapsed(), [
    toggleCollapsed,
  ]);

  const isCollapsed = collapsed && !openDrawer;

  return (
    <TopbarWrapper>
      <Header
        className={
          isCollapsed ? 'header shadow-long collapsed' : 'header shadow-long'
        }
      >
        <Row
          style={{ height: '100%' }}
          type="flex"
          justify="space-between"
          align="middle"
        >
          <Col>
            {isCollapsed ? (
              <MenuUnfoldOutlined
                style={{ fontSize: '2rem' }}
                onClick={handleToggle}
              />
            ) : (
              <MenuFoldOutlined
                style={{ fontSize: '2rem' }}
                onClick={handleToggle}
              />
            )}
          </Col>
          <Col>
            <Row
              className="header-right"
              type="flex"
              justify="end"
              align="middle"
              gutter={[25, 0]}
            >
              <Col>
                <TopBarLangSwitch />
              </Col>
              <Col>
                <TopbarUser />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </TopbarWrapper>
  );
}
