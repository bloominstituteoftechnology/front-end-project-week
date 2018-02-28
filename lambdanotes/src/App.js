import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
      title: 'Note Title',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ab totam modi. Voluptatum, mollitia quidem necessitatibus vero beatae sequi corporis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error a deleniti, distinctio, quis autem expedita officia ipsam ...',
    }
  render() {
    return (
      <div className="LambdaNotes">
        <div className="App">
          <div className="sidebar">
            <h1 className="title">Lambda Notes</h1>
          <div className="button">View Your Notes</div>
          <div className="button">+ Create New Note</div>
          </div>
        </div>
      <ul className="notes">
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
        <li className="list-notes">
          <div className="note-title">{this.state.title}</div>
          <div><hr width="100%"></hr></div>
          <div className="note-message">{this.state.message}</div>
        </li>
      </ul>
      </div>
    );
  }
}

export default App;
