import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

import bg from '../../images/endless-constellation.svg';
import logo from '../../images/logo.svg';
import PageLayout from '../../components/PageLayout';
import PageBackground from '../../components/PageBackground';

const { Password } = Input;
const { Item: FormField } = Form;

const Login = ({ isFetching, error, doLogin }) => {
  return (
    <PageBackground background={bg}>
      <PageLayout>
        <Wrapper>
          <Logo src={logo} />
          <Form
            name="formLogin"
            onFinish={(values) => {
              doLogin(values.user, values.password);
            }}
            autoComplete="off"
          >
            <FormField
              {...(error && {
                help: error,
                validateStatus: 'warning',
              })}
              name="user"
              rules={[
                {
                  required: true,
                  message: 'Por favor, insira um e-mail',
                },
                {
                  type: 'email',
                  message: 'Por favor, insira um e-mail válido',
                },
              ]}
              hasFeedback
            >
              <Input type="email" placeholder="Usuário" size="large" />
            </FormField>
            <FormField
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Por favor, insira uma senha!',
                },
              ]}
              hasFeedback
            >
              <Password placeholder="Senha" size="large" />
            </FormField>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={isFetching}
              block
            >
              Entrar
            </Button>
          </Form>
        </Wrapper>
      </PageLayout>
    </PageBackground>
  );
};

const Wrapper = styled.div`
  margin: 25% auto;
  max-width: 250px;
  display: flex;
  flex-direction: column;

  .ant-form-item-explain-error {
    font-weight: 500;
  }
`;

const Logo = styled.img`
  width: 350px;
  margin-bottom: 40px;
  align-self: center;
  color: white;
`;

export default Login;
