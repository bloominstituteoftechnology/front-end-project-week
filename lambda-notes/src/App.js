import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-3 left_side'>
              <h2 className='nav_head'>Lambda Notes</h2>
              <a className='nav_button'>View Your Notes</a>
              <a className='nav_button'>+Create New Notes</a>
            </div>

            <div className='col-9 right_side'>
              <div className='row title_bar'>
                <h4>Your Notes:</h4>
              </div>
              <div className='row'>
                CARDS GO HERE...
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
