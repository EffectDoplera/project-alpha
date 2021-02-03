import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import './App.css';
import Users from './components/Users/Users';
import MainLayout from './layouts/MainLayout';

const { Content } = Layout;

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <MainLayout>
          <Sidebar />
          <Layout className="content">
            <Content>
              <Route path={'/profile'} component={Profile} />
              <Route path={'/dialogs'} component={Dialogs} />
              <Route path={'/users'} component={Users} />
              <Route path={'/news'} component={News} />
              <Route path={'/music'} component={Music} />
              <Route path={'/settings'} component={Settings} />
            </Content>
          </Layout>
        </MainLayout>
      </Router>
    </React.StrictMode>
  );
};

export default App;
