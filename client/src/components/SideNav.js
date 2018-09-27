import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../styles';

const StyledSideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background-color: #ddd;
  padding: 2rem;
  box-shadow: 0.5rem 0 1rem rgba(0, 0, 0, 0.13);
`;

const PrimaryHeading = styled.h1`
  font-size: 3.6rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const BlockButton = Button.extend`
  width: 100%;
  display: block;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const SideNav = ({ isLoggedIn, logout }) => {
  return (
    <StyledSideNav>
      <PrimaryHeading>
        Lambda <br /> Notes
      </PrimaryHeading>
      {isLoggedIn ? (
        <React.Fragment>
          <LinkWrapper to="/notes">
            <BlockButton>View Your Notes</BlockButton>
          </LinkWrapper>

          <LinkWrapper to="/notes/new">
            <BlockButton>+ Create a new note</BlockButton>
          </LinkWrapper>
          <BlockButton onClick={logout}>Logout</BlockButton>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <LinkWrapper to="/">
            <BlockButton>Login</BlockButton>
          </LinkWrapper>

          <LinkWrapper to="/register">
            <BlockButton>Sign Up</BlockButton>
          </LinkWrapper>
        </React.Fragment>
      )}
    </StyledSideNav>
  );
};

export default SideNav;
