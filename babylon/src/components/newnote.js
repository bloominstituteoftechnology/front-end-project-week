import React from 'react';
import styled from 'styled-components';
import LeftRail from './leftrail';
import SectionTitle from './sectiontitle';
import Form from './form';

const StyledNewNote = styled.div`
  display: flex;

  .new-note__right {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

`;

const NewNote = () => (
  <StyledNewNote>
    <LeftRail />
    <div className='new-note__right'>
      <SectionTitle name='Create New Note:'/>
      <Form />
    </div>
  </StyledNewNote>
);

export default NewNote;
