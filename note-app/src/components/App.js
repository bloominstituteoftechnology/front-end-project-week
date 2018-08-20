import React, { Component } from 'react';

import '../styles/App.css';
import SideBar from './side-bar';
import CreateNote from './create-note';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [] 
    }
  }
  render() {
    return (
      <div className="App">
        <div className="heading">
          <h3 className= "app-header">List View</h3>
          <hr/>
        </div>
        <div className = "main-container">
          <SideBar />
          {/* <div classname = "changing-container">Test</div> */}
          <CreateNote />
        </div>
        
      </div>
    );
  }
}

export default App;
