import styled from 'styled-components';
import { Button, StyledLink } from '../../mixins';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  height: 100vh;
  width: 249px;
  background: rgb(215, 215, 215);
  overflow-x: hidden;
  padding: 25px 16px;
  border: 1px solid rgb(152, 152, 152);
  border-right: none;
  /* overflow: hidden; */
`;

export const StyledH1 = styled.h1`
  font-size: 4rem;
  color: rgb(74, 73, 74);
  line-height: 3rem;
  text-align: left;
  margin: 0 0 15px;
`;

export const StyledSidebarLink = styled(StyledLink)`
  text-decoration: none;
  margin-bottom: 21px;
`;

export const StyledButton = styled(Button)``;
