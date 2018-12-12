import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { NotesContainer }from '../../styles';
import { getNotes } from '../../actions';

import requireAuth from '../requireAuth';

import Header from '../Header/container';
import ToolBar from '../ToolBar/container';
import NoteList from '../NoteList/container';
import NoteForm from '../NoteForm/container';
import NoteModule from '../NoteModule/container'

class Home extends Component {
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

const mapStateToProps = state => {
  return {
    showMenu: state.notes.showMenu,
    authenticated: state.auth,
    error: state.notes.error
  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(requireAuth(Home)));
