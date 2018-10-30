import styled from 'styled-components';
import { Button } from '../../mixins';
import { Link } from 'react-router-dom';

export const StyledSidebar = styled.div`
  flex-shrink: 0;
  height: 100vh;
  width: 249px;
  background: rgb(215, 215, 215);
  overflow-x: hidden;
  padding: 25px 16px;
  overflow: hidden;
`;

export const StyledH1 = styled.h1`
  font-size: 4rem;
  color: rgb(74, 73, 74);
  line-height: 3rem;
  text-align: left;
  margin: 0 0 37px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButton = styled(Button)``;
