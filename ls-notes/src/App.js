import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-Header">
          <h1>Your Notes {this.props.pageHeader}</h1>

        <header className="App-header">
          <h1>Note #1 Title {this.props.title}</h1>
        </header>
        <p className="App-intro">This is the note body.</p>
        </div>  
        );
  }
}


export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
