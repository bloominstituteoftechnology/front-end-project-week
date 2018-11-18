import React, { Component } from 'react';
import '../src/App.css';

import ListView from './components/Display_Components/ListView';
import CreateNewNote from './components/Display_Components/CreateNewNote';

class App extends Component {



  render() {



    return (
      <div className="App">
       
        <ListView  />
        <CreateNewNote />
      </div>
    );
  }
}

export default App;
