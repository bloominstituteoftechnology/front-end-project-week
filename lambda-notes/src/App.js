import React, { Component } from 'react';
import SideBar from './components/MainPage/SideNav';
import ViewNotes from './components/MainPage/ViewNotes';
import NewNote from './components/Routes/NewNote';
import NoteViewer from './components/Routes/NoteViewer';
import { Route } from 'react-router-dom';
import EditNote from './components/Routes/EditNote';
import DeleteNote from './components/Routes/DeleteNote';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Route path='/delete-note' component={DeleteNote} />
                <SideBar />
                <Route exact path='/' component={ViewNotes} />
                <Route path='/create-note' component={NewNote} />
                <Route path='/view-note/:id' component={NoteViewer} />
                <Route path='/edit-note/:id' component={EditNote} />
            </div>
        );
    }
}

export default App;
