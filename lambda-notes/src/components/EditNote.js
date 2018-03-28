import React from 'react';
import styled from 'styled-components';
import HomeLeftPanel from './HomeLeftPanel';
import EditForm from './EditForm';

const StyledEditNote = styled.div`
    display: flex;
    background: lavender;
    height: 700px;

    h6 {
        margin-top: 20px;
        margin-left: 5%;
        font-weight: bold;
    }
`;

const EditNote = props => (
    <StyledEditNote>
      <HomeLeftPanel />
      <div className='update-note__right'>
        <h6>Edit Your Note:</h6>
        <EditForm id={props.match.params.id}/>
      </div>
    </StyledEditNote>
  );
  
  export default EditNote;