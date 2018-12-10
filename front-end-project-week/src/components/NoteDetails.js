import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  background-color: black;
  color: white;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const NoteDetails = props => {
  return (
    <DivWrapper>
      <h1>This is the NoteDetails Component</h1>
    </DivWrapper>
  );
};

// NoteDetails.propTypes = {
//   propertyName: PropTypes.string
// }

export default NoteDetails;
