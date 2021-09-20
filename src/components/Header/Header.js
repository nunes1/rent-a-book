import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { BookOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import PageLayout from '../PageLayout';

const { Item } = Menu;
const { Header } = Layout;

const NavigationMenu = ({ loggedIn }) => {
  let location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  const [selected, setSelected] = useState(location.pathname);

  return (
    <Header>
      <PageLayout row>
        {loggedIn ? (
          <Fragment>
            <StyledLinkRight to="/list">
              <Logo onClick={e => setSelected('/list')} />
            </StyledLinkRight>
            <StyledMenu
              theme="dark"
              onClick={e => setSelected(e.key)}
              selectedKeys={[selected]}
              mode="horizontal"
            >
              <Item key="/list">
                <Link to="/list">Lista de Livros</Link>
              </Item>
              <Item key="/edit">
                <Link to="/edit">Gerenciamento</Link>
              </Item>
            </StyledMenu>
          </Fragment>
        ) : (
          <StyledLink to="/">
            <LoggedOutMenu />
          </StyledLink>
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
  width: 70%;
`;

const StyledLinkRight = styled(Link)`
  margin: auto 0px auto auto;
  font: icon;
`;
const StyledLink = styled(Link)`
  margin: auto;
  font: icon;
`;

const LoggedOutMenu = styled(Logo)`
  margin: auto;
`;

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
  name: user.name,
});

export default connect(mapStateToProps)(NavigationMenu);
