import React from 'react';
import styled from 'styled-components';
import { Layout, Form, Input, Button } from 'antd';

import bg from '../../images/endless-constellation.svg';
import logo from '../../images/logo.svg';
import PageLayout from '../../components/PageLayout';

const { Password } = Input;
const { Content } = Layout;
const { Item: FormField } = Form;

const Login = () => {
  return (
    <StyledContent>
      <PageLayout>
        <Wrapper>
          <Logo src={logo} />
          <Form
            name="formLogin"
            onFinish={() => {}}
            autoComplete="off"
          >
            <FormField
              name="user"
              rules={[
                {
                  required: true,
                  message: 'Por favor, insira um nome de usuário!',
                },
                {
                  type: 'email',
                  message: 'Por favor, insira um e-mail válido',
                }
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
            <Button type="primary" htmlType="submit" size="large" block>
              Entrar
            </Button>
          </Form>
        </Wrapper>
      </PageLayout>
    </StyledContent>
  );
};

const StyledContent = styled(Content)`
  background: url(${bg}) no-repeat;
  background-size: cover;
  height: calc(100vh - 64px);
`;
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
