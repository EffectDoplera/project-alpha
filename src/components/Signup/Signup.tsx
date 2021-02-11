import {Button, Card, Form, Input} from 'antd';
import axios from 'axios';
import React from 'react';

const layout = {
  wrapperCol: {offset: 7, span: 10},
};

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    axios.post('/api/auth/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    });
  };

  return (
    <Card>
      <Form
        {...layout}
        form={form}
        name="signup"
        onFinish={onFinish}
        scrollToFirstError={true}>
        <Form.Item style={{marginBottom: 0}}>
          <Form.Item
            name={'firstName'}
            style={{display: 'inline-block', width: 'calc(50% - 8px)'}}
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}>
            <Input placeholder={'First name'} />
          </Form.Item>
          <Form.Item
            name={'surname'}
            style={{display: 'inline-block', width: '50%', marginLeft: '8px'}}
            rules={[
              {
                required: true,
                message: 'Please input your surname!',
              },
            ]}>
            <Input placeholder={'Surname'} />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
          hasFeedback>
          <Input placeholder={'Email'} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              min: 6,
              message: 'Password must be at least 6 characters',
            },
          ]}
          hasFeedback>
          <Input.Password placeholder={'Password'} />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {required: true, message: 'Please confirm your password!'},
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                );
              },
            }),
          ]}>
          <Input.Password placeholder={'Confirm Password'} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Signup;
