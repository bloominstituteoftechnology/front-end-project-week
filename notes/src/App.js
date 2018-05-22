import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Sidebar from './components/sidebar';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-main">
          <Sidebar />
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
// export default connect(mapStateToProps, {addNote})(App);
