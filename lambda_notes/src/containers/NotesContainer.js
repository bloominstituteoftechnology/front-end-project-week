import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions';

import { Container } from './Styles';
import NavigationBar from '../components/Navigation/NavigationBar';
import NotesList from '../components/Notes/NotesList';

class NotesContainer extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    const { notes } = this.props;

    return (
      <Container>
        <NavigationBar />
        <NotesList notes={notes} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    getNotes: state.getNotes,
    error: state.error
  }
}

export default connect(mapStateToProps, { getNotes })(NotesContainer);
