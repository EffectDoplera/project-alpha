import {List} from 'antd';
import React from 'react';
import Message, {IMessage} from '../Message/Message';

type MessagesProps = {
  messages: IMessage[];
};

const Messages: React.FC<MessagesProps> = ({messages}) => (
  <List
    itemLayout={'horizontal'}
    dataSource={messages}
    renderItem={(message) => <Message {...message} />}
  />
);

export default Messages;
