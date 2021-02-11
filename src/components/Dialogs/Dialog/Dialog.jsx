import {UserOutlined} from '@ant-design/icons';
import {Avatar, List} from 'antd';
import {last} from 'lodash';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import classes from './Dialog.module.css';

const Dialog = ({name, id}) => {
  const messages = useSelector((state) => state.dialogs.messages);
  const {text} = last(messages);

  return (
    <NavLink to={`/dialogs/${id}`}>
      <List.Item key={id} className={classes.dialog}>
        <List.Item.Meta
          avatar={<Avatar size={64} icon={<UserOutlined />} />}
          title={name}
          description={text}
        />
      </List.Item>
    </NavLink>
  );
};

export default Dialog;
