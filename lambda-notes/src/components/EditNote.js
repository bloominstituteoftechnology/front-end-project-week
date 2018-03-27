import React from 'react';
import styled from 'styled-components';
import HomeLeftPanel from './HomeLeftPanel';
import EditForm from './EditForm';

const StyledEditNote = styled.div`
    display: flex;
    background: lavender;
`;

const EditNote = props => (
    <StyledEditNote>
      <HomeLeftPanel />
      <div className='update-note__right'>
        <h5>Edit Your Note:</h5>
        {/* <EditForm id={props.match.params.id}/> */}
      </div>
    </StyledEditNote>
  );
  
  export default EditNote;