import React from 'react';
// import  { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import logo from './d2rdDroidEmoji.png';
import './App.css';
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import UpdateNote from './components/UpdateNote'

const App = props => {
  return (
    <div className="App">
      <NavLink to="/create">ADD NOTE</NavLink>

      <Route path="/create" component={CreateNote} />
      <Route path="/update/:id" component={UpdateNote} />

      <h1>d2rd Notes</h1>
      <NotesList />
    </div>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
