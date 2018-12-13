import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid rgb(151, 151, 151);
  background-color: rgb(216, 216, 216);
  margin-right: 20px;
  padding: 0 20px;
  height: 100%;
  position: fixed;
`;

const H1Title = styled.h1`
  display: flex;
  user-select: none;
`;

const DivLinkButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkNavButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid rgb(151, 151, 151);
  height: 40px;
  margin-bottom: 20px;
  color: white;
  background-color: rgb(43, 193, 196);
  font-weight: bold;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 3px 10px 1px rgba(0, 0, 0, 0.2);
  user-select: none;

  &:hover {
    background-color: white;
    color: rgb(43, 193, 196);
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const SideNav = props => {
  return (
    <DivWrapper>
      <H1Title>Lambda Notes</H1Title>
      <DivLinkButtons>
        <LinkNavButton to={props.viewNotesLink}>View Your Notes</LinkNavButton>
        <LinkNavButton to={props.createNoteLink}>
          + Create New Note
        </LinkNavButton>
      </DivLinkButtons>
    </DivWrapper>
  );
};

SideNav.propTypes = {
  viewNotesLink: PropTypes.string,
  createNoteLink: PropTypes.string
};

export default SideNav;
