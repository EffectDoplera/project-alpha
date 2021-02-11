import React from 'react';
import { List } from 'antd';
import Dialog from '../Dialog/Dialog';

import classes from './Contacts.module.css'

const Contacts = ({ contacts }) =>
  (
    <List
      itemLayout='horizontal'
      dataSource={ contacts }
      renderItem={ (dialog) => (<Dialog { ...dialog } />) }
      className={ classes.contacts }
    />
  );

export default Contacts;
