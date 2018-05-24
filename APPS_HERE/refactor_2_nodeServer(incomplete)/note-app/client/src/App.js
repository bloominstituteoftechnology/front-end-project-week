import React, { Component } from 'react';
import './styling/App.css';
import NoteList from './views/NoteList';
import CreateNote from './views/CreateNoteForm';
import ViewNote from './views/ViewNote';
import EditNote from './views/EditNote'

import Movie from './Movies/Movie';
import './App.css'

class App extends Component {
  state = {}
  render() {
    return (
      <div className="AppWrapper">>
        <Route 
          exact path ='/' 
            component={NoteList}/>      
            <Route 
                path='/ViewNote/:id' 
                  component={Note}/>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </div>
    );
  }
}

export default App;


// render() {
//   return (
//     <div>
//       <SavedList list={this.state.savedList} />
//       <Route 
//           exact path ='/' 
//             component={MovieList}/>
//       <Route 
//           path='/movie/:id' 
//             component={Movie}/>
//       <Route
//         path="/movies/:id"
//         render={props => (
//           <Movie {...props} addToSavedList={this.addToSavedList} />
//         )}
//       />
//     </div>
//   );
// }
// }

