import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import MainLayout from './layouts/MainLayout';
import { autoLogin } from './redux/actions/authActions';
import Routes from './routes';
import './App.css';

const App = () => {
  const isAuth = useSelector((state: any) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(autoLogin());

  }, [ isAuth ]);

  return (
    <MainLayout>
      <Sidebar />
      <Layout.Content className='content'>
        <Routes isAuth={ !!isAuth } />
      </Layout.Content>
    </MainLayout>
  );
};

export default App;
