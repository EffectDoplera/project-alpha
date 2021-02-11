import {Avatar, Image} from 'antd';
import React from 'react';

import classes from './ProfileInfo.module.css';
import intro from './../../../static/images/intro.jpg';

const ProfileInfo = ({
  firstName = 'USER',
  surname = 'USER',
  introUrl = intro,
  avatarUrl,
  status = 'status',
}) => {
  return (
    <div className={classes.info}>
      <Image src={introUrl} preview={false} />
      <div className={classes.bio}>
        <Avatar size={80} src={avatarUrl} />
        <div>
          <span>
            {firstName} {surname}
          </span>
        </div>
        <div>{status}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
