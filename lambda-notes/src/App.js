import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";


import './App.css';

import {Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Sidebar />
<Route exact path="/" render={ownProps=>(<NoteList {...ownProps}/>)} />
<Route exact path="/create_new_note" render={ownProps=>(<CreateNote {...ownProps}/>)} />
{/* not implemented yet */}
<Route exact path="/note/:id" render={ownProps=>(<Note {...ownProps}/>)}/>
       
      
      </div>
    );
  }
}

export default App;
