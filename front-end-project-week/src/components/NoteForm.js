import React, { Component } from 'react';
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
class NoteForm extends Component {
  render() {
    return (
      <DivWrapper>
        <h1>This is the NoteForm Component</h1>
      </DivWrapper>
    );
  }
}

// NoteForm.propTypes = {
//   propertyName: PropTypes.string
// }

export default NoteForm;
