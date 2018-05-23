import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import SideBar from './components/sidebar';
import Notes from './components/notes';
import NewNote from './components/newNote';
import { Route } from 'react-router-dom';

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

  // const App = () => (
  //   <div>
  //     <Navigation />
  //     <Route exact path="/" component={} />
  //     <Route exact path="/" component={} />
  //     <Route exact path="/" component={} />
  //     </div>
  // )


  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="App-main">
          <Route exact path="/" component={Board} />
          <Route exact path="/newnote" component={NewNote} />
          <Route exact path="/editnote" component={NewNote} />
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