import React from 'react';
import styled from 'styled-components';
import LeftRail from './leftrail';
import SectionTitle from './sectiontitle';
import UpdateForm from './updateform';

const StyledUpdateNote = styled.div`
  display: flex;

  .update-note__right {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

`;

const UpdateNote = props => (
  <StyledUpdateNote>
    <LeftRail />
    <div className='update-note__right'>
      <SectionTitle name='Edit Note:'/>
      <UpdateForm id={props.match.params.id}/>
    </div>
  </StyledUpdateNote>
);

export default UpdateNote;
