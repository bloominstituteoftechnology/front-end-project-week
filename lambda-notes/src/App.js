import React, { Component } from 'react';
import logo from './logo.svg';
import Note from '../src/Components/Note';
import CreateNote from '../src/Components/CreateNote';
import './App.css';

class App extends Component {


  createNewCard() {
    console.log('testing create new card.')
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="leftbox">
              <h3 className="title">Lambda</h3>
              <h3 className="title">Notes</h3>
                <button className ="Buttons">View Your Notes</button>
                <button className ="Buttons" onClick={() => this.createNewCard()}>+ Create New Note</button>
            </div>
          </div>
          <div className="col-9">
            <div className="rightbox">
            <h3>Your Notes:</h3>
            {
            switch() {
             case Note:
             return <Note/>
             case CreateNote: 
             return <CreateNote/>
             default:
             return button;
            }
          }
            </div>
          </div>
        </div>
      </div> // container!!!
    );
  }
}

export default App;
