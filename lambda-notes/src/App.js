import React, { Component } from 'react';
import SideBar from './components/MainPage/SideNav';
import ViewNotes from './components/MainPage/ViewNotes';
import NewNote from './components/Routes/NewNote';
import NoteViewer from './components/Routes/NoteViewer';
import { Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
                <SideBar />
                <Route exact path='/' component={ViewNotes} />
                <Route path='/create-note' component={NewNote} />
                <Route path='/view-note/:id' component={NoteViewer} />
            </div>
        );
    }
}

export default App;
