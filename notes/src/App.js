import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const AppDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  .left-menu {
    border: 1px solid green;
    width: 30%;
  }
  .right-display {
    border: 1ps solid blue;
    width:69%;
    .note-preview {
      border: 1px solid yellow;
      width: 100px;
    }
  }

`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [
        {
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
      ],

    }
  }
  render() {
    return (
      <AppDiv>
        <div className="left-menu">
          <h1>Lambda Notes</h1>
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
        </div>
        <div className="right-display">
          <h4>Your: Notes</h4>
          {this.state.notes.map(note => {
            return (
              <div className="note-preview">
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </div>
            )
          })}
        </div>
      </AppDiv>
    );
  }
}

export default App;
