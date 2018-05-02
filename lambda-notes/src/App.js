import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNote from './Components/CreateNote';
import ListView from './Components/ListView';

class App extends Component {
  render() {
    return (
      <div className='app'>
        {/* <CreateNote /> */}
        <ListView />
      </div> 
    );
  }
}

export default App;
