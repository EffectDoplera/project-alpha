import {SmileOutlined} from '@ant-design/icons';
import {List, Result} from 'antd';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, follow, unfollow} from '../../redux/actions/usersActions';
import User from './User/User';

import classes from './Users.module.css';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const {users, isLoading}: any = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const clickHandler = (type: string, id: string) =>
    type === 'Follow' ? dispatch(follow(id)) : dispatch(unfollow(id));

  return (
    <div className={classes.users}>
      <div className={classes.usersList}>
        <List
          size={'small'}
          itemLayout={'vertical'}
          loading={isLoading}
          split={false}
          dataSource={users}
          renderItem={({id, ...rest}: any) => (
            <List.Item key={id}>
              <User id={id} {...rest} clickHandler={clickHandler} />
            </List.Item>
          )}
        />
      </div>
      <Result
        className={classes.info}
        icon={<SmileOutlined />}
        title="Select people's names to preview their profile."
      />
    </div>
  );
};

export default Users;
