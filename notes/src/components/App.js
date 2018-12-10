import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { NotesContainer }from '../styles';
import { getNotes } from '../actions';

import Header from './Header';
import ToolBar from './ToolBar';
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import NoteModule from './NoteModule'


class App extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className={'app-container'}>
        <Header />
        <ToolBar />

        <NotesContainer showMenu={this.props.showMenu}>
          <Route path='/' render={props => <NoteForm {...props}/> } />
          <Route path='/' render={props => <NoteList {...props}/>}/>
        </NotesContainer>

        <Route path='/note/:id' render={props => <NoteModule {...props} /> }
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({showMenu: state.showMenu}), { getNotes })(App));
