import React from 'react';
import { Tasks } from './Tasks';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export const Home = () => {
  return (
    <div className="Home">
      <Layout style={{ height: '100vh' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Task List</Menu.Item>            
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
         
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Tasks />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
         Created by Dawid Dylus
        </Footer>
      </Layout>
    </div>
  );
};
