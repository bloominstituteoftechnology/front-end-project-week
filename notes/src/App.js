import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import SideBar from './components/sidebar';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     newNote: ''
  //   };
  //   this.addNote = addNote.bind(this);
  //   this.updateNewNote = this.updateNewNote.bind(this);
  // }
  // addNote(event) {
  //   event.preventDefault();
  //   this.props.addNote({
  //     value: this.state.newNote,
  //     complete: false
  //   });
  //   this.setState({ newNote: '' });
  // }
  // updateNewNote(event) {
  //   this.setState({ newNote: event.target.value });
  // }

  render() {
    return (
      <div className="App">
        
        <div className="App-main">
        <SideBar />  
          <Board />
        </div>
      </div>  
    );
  }
}
const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default App;