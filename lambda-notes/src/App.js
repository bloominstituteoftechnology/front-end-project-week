import React, { Component } from 'react';
import './styles/reset.css';
import './styles/App.css';
import { connect } from 'react-redux';
// import {  } from './actions';

import NotesList from './components/NotesList';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <h3>Lambda Notes Under Construction - Nedim Omerovic</h3> */}
        <div className='app-container'>
          <div className='left-nav-container'>
            <h2 className='nav-title'>Lambda Notes</h2>
            <div>
              <button className='navBtn'>View Your Notes</button>
              <button className='navBtn'>+ Create New Note</button>
            </div>
          </div> 
          <div className='main-notes-container'>
            <h3 className='notes-page-title'>Your Notes:</h3>
            <div className='notes-container'>
            <NotesList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    notes: state.notes,
    fetching: state.fetching,
  };
}

export default connect(
    mapStateToProps, 
    { }
  ) (App);
