import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CreateNote from './components/Notes/CreateNote'
import SidePanel from './components/SidePanel/SidePanel'
import NoteContainer from './components/Notes/NoteContainer'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path='/' component={SidePanel} />
                <Route exact path='/notes' render={(props) => <NoteContainer {...props}/>} />
                <Route exact path='/create' component={CreateNote} />
            </div>
        );
    }

}
export default App;