import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className='App__container'>
        <div className='App__left'> {/* start of left side div */}
        some holder text
        </div> {/* end of left side div */}

        <div className='App__right'> {/* start of right side div */}
        more holding text
        </div> {/* end of right side div */}

      </div> // container div end
      
    );
  }
}

export default App;
