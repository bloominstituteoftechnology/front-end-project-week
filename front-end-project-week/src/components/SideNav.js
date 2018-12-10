import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div``;

const H1Title = styled.h1``;

const LinkNavButton = styled(Link)``;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const SideNav = props => {
  return (
    <DivWrapper>
      <H1Title>Lambda Notes</H1Title>
      <LinkNavButton to={props.viewNotesLink}>View Your Notes</LinkNavButton>
      <LinkNavButton to={props.createNoteLink}>+ Create New Note</LinkNavButton>
    </DivWrapper>
  );
};

// SideNav.propTypes = {
//   propertyName: PropTypes.string
// }

export default SideNav;
