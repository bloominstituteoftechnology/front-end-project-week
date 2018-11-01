import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from './actions';
import NotesList from './components/NotesList';
import styled from 'styled-components';

const LoadingNotes = styled.div`
  margin-top: 2.8rem;
`;

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="App">
        {this.props.isLoading ?
        <LoadingNotes>Loading Notes...</LoadingNotes> :
        this.props.error ?
        <div>An error occurred. Perhaps you forgot to start the server?</div> :
        <NotesList />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // notes: state.notes, // don't need this here?
  isLoading: state.isLoading,
  error: state.error
});

export default connect(mapStateToProps, { getNotes })(App);
