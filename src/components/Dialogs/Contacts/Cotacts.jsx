import React from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Cotacts = ({ contacts }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={contacts}
      renderItem={({ id, name }) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={64} icon={<UserOutlined />} />}
            title={<NavLink to={`/dialogs/${id}`}>{name}</NavLink>}
          />
        </List.Item>
      )}
    />
  );
};

export default Cotacts;
