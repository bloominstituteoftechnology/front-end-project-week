import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {fetchNotes} from './actions/index';
import { connect } from 'react-redux';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

class App extends Component {

  componentDidMount(){
    console.log(this.props.notes);
  }

  render() {
    return (
      <div className="App">
        
        <NoteList notes={this.props.notes}/>

        <NoteForm />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {
  fetchNotes
})(App);
