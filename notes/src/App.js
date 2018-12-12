import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import NotesListView from './views/NotesListView';
import Note from './components/Note';
import CreateNewNote from './components/CreateNewNote';
import EditNote from './components/EditNote';
import Sidebar from './components/Sidebar';
import Authenticate from './components/Authenticate';

import { getNotes } from './actions/';

const AppWrapper = styled.div`
  display: flex;
  margin: auto 0;
`;
const MainWrapper = styled.div`
  margin-left: 200px;
  width: 80%;
`;

class App extends Component {
    state = {
        filteredNotes: [],
        reversedNotes: [],
        sortText: 'newest',
    }

  componentDidMount() {
    this.props.getNotes();
  }

  searchNotes = event => {
    const searchNotes = this.props.notes.filter(note => {
      if (note.textBody.includes(event.target.value) || note.title.includes(event.target.value)) {
        return note;
      }
    });
    this.setState({ filteredNotes: searchNotes })
  }

  sortNotes = event => {
    let reversedArray = this.props.notes.reverse();
    this.setState(prevState => ({ reversedNotes: reversedArray, sortText: (prevState.sortText === 'newest' ? 'oldest' : 'newest') }));
  }

  render() {
    return (
      <AppWrapper>
        <Route path="/" render={props => <Sidebar {...props} searchNotes={this.searchNotes} />} />
          <MainWrapper>
            <Route 
              exact path="/" 
              render={props => 
                <NotesListView 
                  {...props}
                  sortNotes={this.sortNotes}
                  sortText ={this.state.sortText}
                  notes={this.state.filteredNotes.length > 0 && this.state.filteredNotes.length != this.props.notes.length ? this.state.filteredNotes : (this.state.reversedNotes.length ? this.state.reversedNotes : this.props.notes)} 
                /> 
                }
              />
            
            <Route exact path="/note/:noteId" render={props => <Note {...props} notes={this.props.notes} />} />
            <Route path="/createnewnote" component={CreateNewNote} />
            <Route path="/note/edit/:noteId" render={props => <EditNote {...props} notes={this.props.notes} />} />
          </MainWrapper>
      </AppWrapper>
    );
  }
}

const mapStatetoProps = state => {
  return {
      notes: state.notes,
      fetchingNotes: state.fetchingNotes,
      error: state.error
  }
}

export default Authenticate(withRouter(connect(mapStatetoProps, { getNotes })(App)));