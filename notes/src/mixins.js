import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ViewContainer = styled.div`
  flex-grow: 1;
  height: 100vh;
  background: white;
  padding: 10px 5px;
  border: 1px solid rgb(152, 152, 152);
  overflow-y: scroll;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.div`
  width: 214px;
  background: rgb(42, 192, 196);
  color: rgb(255, 255, 255);
  font-size: 1.6rem;
  font-weight: 900;
  text-align: center;
  padding: 15px 0;
  border: 1px solid gray;
  margin: 0 0 21px;
`;

export const StyledH3 = styled.h3`
  font-size: 2.3rem;
  color: rgb(74, 73, 74);
`;

export const StyledP = styled.p`
  text-align: left;
  font-size: 1.6rem;
  color: rgb(0, 0, 0);
  margin-top: 9px;
`;