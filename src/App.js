import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import Users from './components/Users/Users';
import MainLayout from './layouts/MainLayout';
import Auth from './pages/Auth';

const { Content } = Layout;

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <MainLayout>
          <Sidebar />
          <Content className='content'>
            <Route path={ '/auth' } component={ Auth } />
            <Route path={ '/profile' } component={ Profile } />
            <Route path={ '/dialogs' } component={ Dialogs } />
            <Route path={ '/users' } component={ Users } />
            <Route path={ '/news' } component={ News } />
            <Route path={ '/music' } component={ Music } />
            <Route path={ '/settings' } component={ Settings } />
          </Content>
        </MainLayout>
      </Router>
    </React.StrictMode>
  );
};

export default App;
