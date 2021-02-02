import React from 'react';
import { useSelector } from 'react-redux';
import Contacts from './Contacts/Cotacts';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

import classes from './Dialogs.module.css';

const Dialogs = () => {
  const { messages, dialogs } = useSelector((state) => state.dialogs);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <Contacts contacts={dialogs} />
      </div>
      <div className={classes.messages}>
        {messages.map((message) => (
          <Message key={messages.id} {...message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
