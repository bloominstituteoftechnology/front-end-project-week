import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NoteCard from './notecard';
import LeftRail from './leftrail';
import SectionTitle from './sectiontitle';

const StyledList = styled.div`
  display: flex;

  .list__right {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

`;

const List = props => (
  <StyledList>
    <LeftRail />
    <div className='list__right'>
      <SectionTitle name='Your Notes:'/>
      {props.notes.map((note, index) => {
        return (
          <NoteCard key={index} note={note} />
        );
      })}
    </div>
  </StyledList>
);

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(List);
