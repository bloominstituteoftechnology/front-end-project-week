import React from 'react';
import styled from 'styled-components';
import HomeLeftPanel from './HomeLeftPanel';
import EditForm from './EditForm';

const StyledEditNote = styled.div`
    display: flex;
    height: 700px;

    .update-note__right {
      width: 100%;
    }
`;

const EditNote = props => (
    <StyledEditNote>
      <HomeLeftPanel />
      <div className='update-note__right'>
        
        <EditForm id={props.match.params.id}/>
      </div>
    </StyledEditNote>
  );
  
  export default EditNote;