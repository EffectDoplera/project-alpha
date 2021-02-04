import { Button, Card, Space } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import React from 'react';

import classes from './User.module.css';

type UserProps = {
  id: string;
  photoUrl: string;
  fullName: string;
  followed: boolean;
  clickHandler: any;
};

const User: React.FC<UserProps> = ({ id, photoUrl, fullName, followed, clickHandler }) => (
  <Card className={classes.user} hoverable={true}>
    <Card.Meta
      className={classes.meta}
      avatar={<Avatar src={photoUrl} size={60} />}
      title={fullName}
      description={
        <Space>
          <Button type={'primary'} danger={followed} onClick={(event: any) => clickHandler(event.target.innerText, id)}>
            {followed ? 'Unfollow' : 'Follow'}
          </Button>
          <Button>Remove</Button>
        </Space>
      }
    />
  </Card>
);

export default User;
