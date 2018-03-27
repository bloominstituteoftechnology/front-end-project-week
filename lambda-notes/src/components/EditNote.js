import React from 'react';
import styled from 'styled-components';
import HomeLeftPanel from './HomeLeftPanel';
import EditForm from './EditForm';

const StyledEditNote = styled.div`

`;

const EditNote = props => (
    <StyledEditNote>
      <HomeLeftPanel />
      <div className='update-note__right'>
        <h2>Edit Your Note:</h2>
        <EditForm id={props.match.params.id}/>
      </div>
    </StyledEditNote>
  );
  
  export default EditNote;