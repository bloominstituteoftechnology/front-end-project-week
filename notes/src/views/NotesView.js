import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchData } from '../actions';

import NoteCard from '../components/Notes/NoteCard';

class NotesView extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Title> Your Notes:</Title>
        <List>
          {this.props.notes.map((note) => {
            return <NoteCard note={note} key={note._id} />;
          })}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    notes: state.notesReducer.notes,
    fetchingData: state.notesReducer.fetchingData,
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(NotesView);

const Container = styled.div`
  width: 100%;
  margin: 50px 3%;
  height: 100%;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;
