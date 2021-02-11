import {Card, List} from 'antd';
import React from 'react';

import classes from './Message.module.css';

export type IMessage = {
  id: string;
  text: string;
};

type MessageProps = IMessage;

const Message: React.FC<MessageProps> = ({text}) => (
  <List.Item>
    <Card bordered={false} className={classes.message}>
      <p>{text}</p>
    </Card>
  </List.Item>
);

export default Message;
