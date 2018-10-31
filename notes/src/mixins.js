import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  background: rgb(243, 243, 243);
  padding: 64px 30px 0;
  border: 1px solid rgb(152, 152, 152);
  overflow-y: scroll;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const Button = styled.div`
  cursor: pointer;
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
  color: rgb(74, 73, 74);
  margin-top: 9px;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 33px 0;
`;

export const StyledInput = styled.input`
  max-width: 402px;
  font-size: 1.6rem;
  color: rgb(0, 0, 0);
  ::placeholder {
    color: rgb(152, 152, 152);
  }
  padding: 14px 12px;
  border: 1px solid rgb(152, 152, 152);
  border-radius: 2px;
  margin-bottom: 16px;
  `;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 56vh;
  resize: none;
  font-size: 1.6rem;
  color: rgb(0, 0, 0);
  ::placeholder {
    color: rgb(152, 152, 152);
  }
  padding: 14px 12px;
  border: 1px solid rgb(152, 152, 152);
  border-radius: 2px;
  margin-bottom: 16px;
`;
