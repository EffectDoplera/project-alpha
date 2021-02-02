import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import classes from './Sidebar.module.css'

const { Sider } = Layout

const Navbar = () => {
  return (
    <Sider collapsible className={classes.side}>
      <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
        <Menu.Item key='1'>
          <NavLink to='/profile' activeClassName={classes.active}>
            Profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key='2'>
          <NavLink to='/dialogs' activeClassName={classes.active}>
            Messages
          </NavLink>
        </Menu.Item>
        <Menu.Item key='3'>
          <NavLink to='/news' activeClassName={classes.active}>
            News
          </NavLink>
        </Menu.Item>
        <Menu.Item key='4'>
          <NavLink to='/music' activeClassName={classes.active}>
            Music
          </NavLink>
        </Menu.Item>
        <Menu.Item key='5'>
          <NavLink to='/settings' activeClassName={classes.active}>
            Settings
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Navbar
