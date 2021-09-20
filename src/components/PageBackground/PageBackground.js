import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

const PageBackground = ({ background, children }) => {
  return <StyledContent background={background}>{children}</StyledContent>;
};

const StyledContent = styled(Content)`
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  height: calc(100vh - 64px);
  overflow-y: auto;
`;

export default PageBackground;
