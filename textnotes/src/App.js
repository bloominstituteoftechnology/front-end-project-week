import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import NotesContainer from './Components/NotesContainer';
import SideBar from './Components/SideBar';
import { getNotes } from './Action';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log("state", this.props.notes);
    return (
      <div className="container">
        <SideBar />

        <nav>
          <ul>
            {this.props.notes.map(note => {
                return <NotesContainer key={note.id} note={note}/>;
            })}
          </ul>
        </nav>
    </div>
    );
  }
}

// mapStateToProps

const mapStateToProps = state => {
  return {
    loading: state.loading,
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { getNotes })(App);
