import React from 'react';
import {Layout} from 'antd';

import classes from './MainLayout.module.css';

const MainLayout:React.FC = ({children}) => {
  return (
    <Layout className={classes.app}>
      {children}
    </Layout>
  );
};

export default MainLayout;
