import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchNotes, sortAToZ, sortZToA } from './actions';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Authenticate from './components/Authenitcate';
import LoginPage from './components/LoginPage';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import IndividualNote from './components/IndividualNote';

const AppDiv = styled.div`
  display: flex;
`

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updatingNotes !== prevProps.updatingNotes) {
        if (!this.props.updatingNotes) {
            this.props.fetchNotes();
        }
      }
  }

  render() {
    return (
      <AppDiv>
        <Navigation notes={this.props.notes}/>
        <Route exact path='/' render={props => <NotesList {...props} notes={this.props.notes}/>} />
        <Route exact path='/add-note' component={NoteForm} />
        <Route exact path='/note/:id' render={props => <IndividualNote {...props} />} />
        <Route exact path='/edit-note/:id' render={props => <NoteForm {...props} edit/>} />
      </AppDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
      notes: state.notes,
      fetchingNotes: state.fetchingNotes,
      updatingNotes: state.updatingNotes,
  }
}

export default Authenticate(
    withRouter(
      connect(mapStateToProps, { fetchNotes, sortAToZ, sortZToA })(App)
  )
)(LoginPage);

