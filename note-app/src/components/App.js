import React, { Component } from 'react';

import '../styles/App.css';
import SideBar from './side-bar';
import CreateNote from './create-note';
import EditNote from './edit-note';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [{title: "Test", content: "This is some content that is being created just to test this out. "}] 
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
          {/* <CreateNote /> */}
          <EditNote />

        </div>
        
      </div>
    );
  }
}

export default App;
