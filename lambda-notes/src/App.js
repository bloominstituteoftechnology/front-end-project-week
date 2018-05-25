import React, { Component } from 'react'; 
import './App.css';
import ListView from './components/listview.js'

class App extends Component {
  render() {
    return (
      <div className="App">      
          <ListView />       
      </div>
    );
  }
}

export default App;
