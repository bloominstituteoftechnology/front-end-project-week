import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { getNotes, addNote} from '../actions';
import ToolBar from './ToolBar';
import NoteList from './NoteList'
import NoteForm from './NoteForm'


class App extends Component {

  componentDidMount() {
    this.props.getNotes();
  }


  noteClicked = (ev) => {
    ev.preventDefault();
  }

  formSubmited = (title, body, history) => {
    if (!title.length || !body.length) return;
    const note = {title, body};
    this.props.addNote(note);
    history.push('/');
  }

  render() {
    return (
      <div className={'app-container'}>
        <ToolBar />

        <Route 
          path='/'
          exact
          render={props =>
            <NoteList 
              {...props}
              notes={this.props.notes} 
              noteClicked={this.noteClicked}
            />
          }
        />

        <Route 
          path='/add'
          exact
          render={props => 
            <NoteForm
              {...props}
              onSubmit={this.formSubmited}
            />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
}

export default withRouter(connect(mapStateToProps, { getNotes, addNote })(App));
