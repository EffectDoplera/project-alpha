import React from 'react';
import {Layout} from 'antd';

import classes from './Header.module.css';

const Header = () => {
  return (
    <Layout.Header className={classes.header}>
      <img
        src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
        alt="logo"
      />
    </Layout.Header>
  );
};

export default Header;
