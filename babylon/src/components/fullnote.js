import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LeftRail from './leftrail';
import SectionTitle from './sectiontitle';
import TextBlock from './textblock';

const StyledNote = styled.div`
  display: flex;

  .full-note__right {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

`;

const FullNote = props => (
  <StyledNote>
    <LeftRail />
    <div className='full-note__right'>
      <SectionTitle name={props.notes[0].title}/>
      <TextBlock body={props.notes[0].body}/>
    </div>
  </StyledNote>
);

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(FullNote);
