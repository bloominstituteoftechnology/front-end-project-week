import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NoteCard from './notecard';
import HomeLeftRail from './homeleftrail';
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
    <HomeLeftRail />
    <div className='list__right'>
      <SectionTitle name={`Your Notes (${props.sortStatus}):`}/>
      {props.notes.map((note, index) => {
        return (
          note.filtered ? null : <NoteCard key={index} note={note} />
        );
      })}
    </div>
  </StyledList>
);

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    sortStatus: state.sortStatus,
  };
};

export default connect(mapStateToProps, null)(List);
