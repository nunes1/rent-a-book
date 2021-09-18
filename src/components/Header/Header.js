import React, { useState } from 'react';
import styled from 'styled-components';
import { BookOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';

import PageLayout from '../PageLayout';

const { Item } = Menu;
const { Header } = Layout;

const NavigationMenu = ({ loggedIn = false }) => {
  const [selected, setSelected] = useState('list');
  return (
    <Header>
      <PageLayout row>
        {loggedIn ? (
          <>
            <Logo />
            <StyledMenu
              theme="dark"
              onClick={e => setSelected(e.key)}
              selectedKeys={[selected]}
              mode="horizontal"
            >
              <Item key="list">Lista de Livros</Item>
              <Item key="edit">Gerenciamento</Item>
            </StyledMenu>
          </>
        ) : (
          <LoggedOutMenu />
        )}
      </PageLayout>
    </Header>
  );
};

const Logo = styled(BookOutlined)`
  font-size: 40px;
  cursor: pointer;
  color: white;
  margin-right: 20px;
`;

const StyledMenu = styled(Menu)`
  width: 100%;
`;

const LoggedOutMenu = styled(Logo)`
  margin: auto;
`;

export default NavigationMenu;
