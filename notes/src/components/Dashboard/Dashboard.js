import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { NotesContainer }from '../../styles';

import Header from '../Header/container';
import ToolBar from '../ToolBar/container';
import NoteList from '../NoteList/container';
import NoteForm from '../NoteForm/container';
import NoteModule from '../NoteModule/container'

class Dashboard extends Component {
  state = {
    fetchedNotes: false,
  }
  componentDidMount() {
    this.props.getNotes();
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className={'app-container'}>
        <Header history={this.props.history}/>
        <ToolBar />
        <NotesContainer showMenu={this.props.showMenu}>
          <NoteForm {...this.props}/>
          <NoteList {...this.props}/>
        </NotesContainer>
        <Route path='/app/note/:id' render={props => <NoteModule {...props} />} /> 
      </div>
    );
  }
}

export default Dashboard;
