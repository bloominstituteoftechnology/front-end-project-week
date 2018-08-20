import React, { Component } from 'react';
import './App.css';

import Menu from './Menu';
import Notes from './Notes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    const notes = [
      {
        title: 'test 1',
        text: 'test content 1',
        id: 0
      },
      {
        title: 'test 2',
        text: 'test content 2',
        id: 1
      },
      {
        title: 'test 3',
        text: 'test content 3',
        id: 2
      },
      {
        title: 'test 4',
        text: 'test content 4',
        id: 3
      }
    ];

    this.setState({ notes: notes });
  }

  render() {
    return (
      <div className="App">
        <div className='body'>
          <Menu />
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
