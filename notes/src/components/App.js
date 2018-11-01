import React, { Component } from 'react';
import './App.css';
import NotesList from './NotesList';
import NoteForm from './NoteForm';
import NoteViewRedux from './NoteViewRedux';
import { getNotes } from '../actions';
import { connect } from 'react-redux';

import axios from 'axios';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Note from './Note';

class App extends Component {

  componentWillMount() { 
    this.props.dispatchGetNotes(); //this doesn't do anything until mapDispatchToProps is called
  }
  // componentDidUpdate() {
  //   this.props.dispatchGetNotes();
  // };
 
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
          component={NotesList}
          // render={() => (
          //   <NotesList />
          // )}
        />
        <Route
          exact
          path='/note-form'
          component={NoteForm}
          // render={() => (
          //   <NoteForm />
          // )}
        />

        <Route 
          path='/notes/:id' 
          // component={NoteViewRedux}
          render={props => (
            <NoteViewRedux id = {props.match.params.id} history={props.history}/>
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

export default withRouter(ConnectedApp);

