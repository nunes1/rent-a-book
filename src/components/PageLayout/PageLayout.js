import React from "react";
import styled from "styled-components";

const PageLayout = ({row, children}) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  height: inherit;
  ${props => props.row && 'flex-direction: row;'}
`;

export default PageLayout;