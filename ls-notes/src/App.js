import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteListView from './src/Components/NoteListView';
import NoteDetailView from './src/Components/NoteDetailView';
import CreateNoteView from './src/Components/CreateNoteView';
import EditNoteView from './src/Components/EditNoteView';
import DeleteNoteModal from './src/Components/DeleteNoteModal';

class App extends Component {
  render() {
    return (
      <div className="Container">
        {/* Navigation controls go here */}
          <div className="Nav-panel">LAMBDA NOTES
          </div>

        {/* Notes lists and all other view elements go below here */}
          <div className="Notes-panel">
            <div className="View-header">
                <h1>Your Notes {this.props.pageHeader}</h1>
            </div>
            <div>
              <ul>
                <li className="Note-row">
                  <div>
                    <header className="Note-header">
                      <h1>Note #1 Title {this.props.title}</h1>
                    </header>
                    <p className="Note-item">This is the note body.</p>
                  </div>
                  <div>
                    <header className="Note-header">
                      <h1>Note #1 Title {this.props.title}</h1>
                    </header>
                    <p className="Note-item">This is the note body.</p>
                  </div>
                  <div>
                    <header className="Note-header">
                      <h1>Note #1 Title {this.props.title}</h1>
                    </header>
                    <p className="Note-item">This is the note body.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>  
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

