import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import styled from 'styled-components';
import NotesListView from './views/NotesListView';
import Note from './components/Note';
import CreateNewNote from './components/CreateNewNote';
import EditNote from './components/EditNote';
import Sidebar from './components/Sidebar';

import { getNotes } from './actions/';

const AppWrapper = styled.div`
  display: flex;
  /* position: relative; */
  height: 100%;
  /* overflow: hidden; */
  margin: auto 0;
`;

class App extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <AppWrapper>
        {/* <Link to="/createnewnote"><div>+ Create New Note</div></Link> */}
        <Route path="/" component={Sidebar} />
        <Route exact path="/" render={props => <NotesListView {...props} notes={this.props.notes} /> } />
        <Route exact path="/note/:noteId" render={props => <Note {...props} notes={this.props.notes} />} />
        <Route path="/createnewnote" component={CreateNewNote} />
        <Route path="/note/edit/:noteId" component={EditNote} />
      </AppWrapper>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state);
  return {
      notes: state.notes,
      fetchingNotes: state.fetchingNotes,
      error: state.error
  }
}

export default withRouter(connect(mapStatetoProps, { getNotes })(App));