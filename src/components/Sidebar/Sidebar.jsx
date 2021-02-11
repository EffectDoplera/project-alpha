import {Layout, Menu} from 'antd';
import {
  MessageOutlined,
  SettingOutlined,
  SoundOutlined,
  UnorderedListOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Sidebar.module.css';

const {Sider} = Layout;

const Navbar = () => {
  return (
    <Sider className={classes.side} collapsed={true}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to="/profile">Profile</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined />}>
          <NavLink to="/dialogs">Messages</NavLink>
        </Menu.Item>
        <Menu.Item key="21" icon={<UserSwitchOutlined />}>
          <NavLink to="/users">Users</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<UnorderedListOutlined />}>
          <NavLink to="/news">News</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<SoundOutlined />}>
          <NavLink to="/music">Music</NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <NavLink to="/settings">Settings</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
