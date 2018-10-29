import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { getNotes } from '../actions';
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
            <NoteForm/>
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

export default withRouter(connect(mapStateToProps, { getNotes })(App));
