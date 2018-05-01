import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import NoteListView from './src/Components/NoteListView';
// import NoteDetailView from './src/Components/NoteDetailView';
// import CreateNoteView from './src/Components/CreateNoteView';
// import EditNoteView from './src/Components/EditNoteView';
// import DeleteNoteModal from './src/Components/DeleteNoteModal';

class App extends Component {
  render() {
    return (
      <div className="Container">
        {/* Navigation controls go here */}
          <div className="Nav-panel">
          <h2>LAMBDA NOTES</h2>

          <div><button class="btn-NavButton">View Your Notes</button></div>
          <div><button class="btn-NavButton">+ Create New Note</button></div>
          </div>
          {/* <ul>
            <li>Button - View Your Notes</li>
            </ul> */}


            
        {/* Notes lists and all other view elements go below here */}
          <div className="Notes-panel">
            <div className="View-header">
                <h1>Your Notes: {this.props.pageHeader}</h1>
            </div>
            <div>
              <ul>
                <li className="Note-row">
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #0 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #1 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #2 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                </li>
                <li className="Note-row">
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #3 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #4 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #5 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                </li>
                <li className="Note-row">
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #6 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #7 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #8 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
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

