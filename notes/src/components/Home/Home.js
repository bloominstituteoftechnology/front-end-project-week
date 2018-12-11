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

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className={'app-container'}>
        <Header />
        <ToolBar />

        <NotesContainer showMenu={this.props.showMenu}>
          <Route path='/' render={props => <NoteForm {...props}/>} />
          <Route path='/' render={props => <NoteList {...props}/>} />
        </NotesContainer>

        <Route path='/note/:id' render={props => <NoteModule {...props} />} /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showMenu: state.notes.showMenu
  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(requireAuth(Home)));
