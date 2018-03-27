import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import ListTodo from './ListTodo/ListTodo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 0,
          title: "This title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating. This is going to be a super long message. Like really very long. I need to test what happens when texts overflows. Okay It's about to go over the edge. More typing because I want to make sure there overflows.",
        },
        {
          id: 1,
          title: "One more Title",
          msg: "lorem2 ipsum2",
        },
        {
          id: 2,
          title: "This title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating",
        },
        {
          id: 3,
          title: "this title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating",
        },
        {
          id: 4,
          title: "this title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating",
        },
        {
          id: 5,
          title: "this title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating",
        },
        {
          id: 6,
          title: "this title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating",
        },
        {
          id: 7,
          title: "this title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating",
        },
        {
          id: 8,
          title: "this title",
          msg: "This is going to be a super long message, so that I can get an idea of the formating",
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <ListTodo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
