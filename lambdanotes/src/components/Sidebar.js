import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #d6d6d6;
  width: 25%;
  padding: 20px 10px 10px 10px;
`;

const Title = styled.h1`
    font-size: 3em;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 3px;
    margin-bottom: 26px;
    padding: 1px 0 0 0.1em
`

const Button = styled.button`
  background-color: #00b9bc;
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 18px;
  padding: 14px 2.3em 8px 2.5em;
  margin-left: 0.2em;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  cursor: pointer;
`;

const Sidebar = () => {
    return <Wrapper>
        <Title>Lambda Notes</Title>
        <StyledLink to="/notes">
          <Button>View Your Notes</Button>
        </StyledLink>
        <StyledLink to="/createNote">
          <Button>Create New Note</Button>
        </StyledLink>
      </Wrapper>;
}

export default Sidebar;