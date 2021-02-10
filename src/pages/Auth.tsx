import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../components/Signup/Login';

const Auth = () => {
  const { token, userId } = useSelector((state: any) => state.auth)

  return (
    <>
      { token ? <Redirect to={`/profile/${userId}`} /> : <Login />}
    </>
  );
};

export default Auth;
