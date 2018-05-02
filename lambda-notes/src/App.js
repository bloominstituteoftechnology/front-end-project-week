import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNote from './Components/CreateNote';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <CreateNote />
      </div> 
    );
  }
}

export default App;
