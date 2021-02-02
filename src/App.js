import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import './App.css';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Layout className="app-wrapper">
          <Sidebar />
          <Layout>
            <Header />
            <Content className="content">
              <Route path={'/profile'} component={Profile} />
              <Route path={'/dialogs'} component={Dialogs} />
              <Route path={'/news'} component={News} />
              <Route path={'/music'} component={Music} />
              <Route path={'/settings'} component={Settings} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Router>
    </React.StrictMode>
  );
};

export default App;
