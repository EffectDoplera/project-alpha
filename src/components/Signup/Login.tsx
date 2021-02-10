import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Form, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authRequest } from '../../redux/actions/authActions';

const layout = {
  wrapperCol: { offset: 8, span: 8 },
};


const Login = () => {
  const [ form ] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (authData: any) => {
    dispatch(authRequest(authData));
  };

  return (
    <Card>
      <Form
        { ...layout }
        form={ form }
        name='login'
        onFinish={ onFinish }
        scrollToFirstError={ true }
      >
        <Form.Item
          name='email'
          rules={ [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ] }
          hasFeedback
        >
          <Input prefix={ <UserOutlined /> } placeholder={ 'Email' } />
        </Form.Item>

        <Form.Item
          name='password'
          rules={ [ { required: true, message: 'Please input your password!' } ] }
          hasFeedback
        >
          <Input.Password prefix={ <LockOutlined /> } placeholder={ 'Password' } />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Log In
          </Button>
        </Form.Item>

        <Form.Item>
          <Divider />
        </Form.Item>

        <Form.Item>
          <Button type={ 'primary' }>
            Create New Account
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
