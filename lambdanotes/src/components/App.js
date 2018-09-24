import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import '../styles/App.css';
import NotesForm from './NotesForm';
import Notes from './Notes'
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">

             <Notes notes={this.props.notes}/>
             <NotesForm />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(
  mapStateToProps,
  {

  }
)(App);
