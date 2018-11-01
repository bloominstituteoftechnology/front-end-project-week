import React, { Component } from 'react';
import './App.css';
import NotesList from './NotesList';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Note from './Note';
import NoteViewRedux from './NoteViewRedux';

class App extends Component {

  componentDidMount() { 
    this.props.dispatchGetNotes(); //this doesn't do anything until mapDispatchToProps is called
  }
 
  render() {
    return (
      <div className="App"> 
        <div className='nav-container'>
          <NavLink to='/notes'>View your notes     </NavLink>
          <NavLink to='/note-form'>     Create new note</NavLink>
        </div>

        <Route
          exact
          path='/notes'
          render={() => (
            <NotesList />
          )}
        />
        <Route
          exact
          path='/note-form'
          render={() => (
            <NoteForm />
          )}
        />

        <Route 
          path='/notes/:id' 
          render={props => (
            <NoteViewRedux id = {props.match.params.id} />
          )}
        />
        
        {/* <Route
          path="/avengers/:avengerId"
          component={AvengerView}
        /> */}

      </div>
    );
  }
}

// export default App;

const mapStateToProps = state => {
  return {
      notes: state.notes,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetNotes: () => dispatch(getNotes())
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ConnectedApp = connector(App);

export default ConnectedApp;

