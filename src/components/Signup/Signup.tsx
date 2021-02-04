import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Divider, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react';

const Signup = () => {
  const onFinish = (values: any) => {
    axios.post('/api/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: values
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Card>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          validateStatus={'error'}
          hasFeedback
          // help="Should be combination of numbers & alphabets"
        >
          <Input prefix={<UserOutlined />} placeholder={'Email'} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
          validateStatus={'success'}
        >
          <Input prefix={<LockOutlined />} type={'password'} placeholder={'Password'} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>

        <Form.Item>
          <Divider />
        </Form.Item>

        <Form.Item>
          <Button type={'primary'} >
            Create New Account
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Signup;
