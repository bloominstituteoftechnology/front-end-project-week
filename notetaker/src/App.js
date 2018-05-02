import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

import './App.css';
import Notes from './Components/Notes';
import { getNotes } from './Actions';

class App extends Component { 
  componentDidMount(){
    this.props.getNotes();
  }
  render() {
    return (
      <div className="App">
        <Notes {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: [{
      title: 'Note Title',
      content: 'Note Content',
      id: 0
    }]
  }
} 
export default connect(mapStateToProps, { getNotes })(App);
