import { Button, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEND_MESSAGE } from '../../actions/dialogs';
import Contacts from './Contacts/Contacts';

import classes from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = () => {
  const { messages, dialogs } = useSelector((state) => state.dialogs);
  const dispatch = useDispatch();

  const newTextElement = React.createRef();

  const sendMessage = () =>
    dispatch({
      type: SEND_MESSAGE,
      payload: { text: newTextElement.current.resizableTextArea.props.value },
    });

  return (
    <div className={classes.dialogs}>
      <Contacts contacts={dialogs} />
      <div className={classes.messenger}>
        <Messages messages={messages} />
        <Input.TextArea ref={newTextElement} />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default Dialogs;
