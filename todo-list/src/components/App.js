import React, { Component } from 'react';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App_sideBar">
          <h3>Lambda<br/>Notes</h3>
          <button>View Your Notes</button>
          <button>+Create New Note</button>
        </div>
        <div className="App_body">

        </div>
      </div>
    );
  }
}

export default App;
