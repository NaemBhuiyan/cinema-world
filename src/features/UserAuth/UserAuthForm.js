import React from 'react';
import { Row, Form, Input, Button } from 'antd';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import getValidateMessages from '@/lib/helpers/getValidationMessages';
import { AuthStore } from '@/store';
import { useReactQueryMutation } from '@/lib/hooks';
import { PRIVATE_ROUTE } from '@/router';
import { Auth } from './api';

function UserAuthForm() {
  const { messages } = useIntl();
  const navigate = useNavigate();
  const loginAction = AuthStore(state => state.login);
  const mutate = useReactQueryMutation(Auth.login);

  const onFinish = async formData => {
    console.log({ mutate });
    try {
      const todo = await mutate.mutateAsync(formData);
      console.log(todo?.response);
    } catch (error) {
      console.error(error);
    }

    loginAction({ token: 'dummyjwttoken', user: formData });
    navigate(`${PRIVATE_ROUTE.DASHBOARD}`);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      validateMessages={getValidateMessages(messages, 'name')}
    >
      <Form.Item
        className="mb-3"
        name="email"
        rules={[{ required: true }, { type: 'email' }]}
        hasFeedback
      >
        <Input placeholder={messages.Email} />
      </Form.Item>

      <Form.Item
        className="mb-3"
        name="password"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input.Password placeholder={messages.Password} />
      </Form.Item>

      <Row type="flex" justify="center">
        <Form.Item>
          <Button
            size="large"
            className="px-4"
            type="primary"
            htmlType="submit"
          >
            {messages.Submit}
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}

export default UserAuthForm;
