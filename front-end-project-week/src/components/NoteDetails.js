import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  user-select: ${props => props.showdeletemodel && 'none'};
  outline: ${props => props.showdeletemodel && 'none'};
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const NoteDetails = props => {
  return (
    <DivWrapper showdeletemodel={props.showDeleteModel}>
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </DivWrapper>
  );
};

// NoteDetails.propTypes = {
//   propertyName: PropTypes.string
// }

export default NoteDetails;
