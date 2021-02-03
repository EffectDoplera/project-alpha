import { Layout, Menu } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Sidebar.module.css';

const { Sider } = Layout;

const Navbar = () => {
  return (
    <Sider className={ classes.side }>
      <Menu theme='dark' defaultSelectedKeys={ ['1'] } mode='inline'>
        <Menu.Item key='1'>
          <NavLink to='/profile'>
            Profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key='2'>
          <NavLink to='/dialogs'>
            Messages
          </NavLink>
        </Menu.Item>
        <Menu.Item key='3'>
          <NavLink to='/news'>
            News
          </NavLink>
        </Menu.Item>
        <Menu.Item key='4'>
          <NavLink to='/music'>
            Music
          </NavLink>
        </Menu.Item>
        <Menu.Item key='5'>
          <NavLink to='/settings'>
            Settings
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
