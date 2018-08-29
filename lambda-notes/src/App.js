import React, { Component } from 'react';
import SideBar from './components/MainPage/SideNav';
import ViewNotes from './components/MainPage/ViewNotes';
import NewNote from './components/Routes/NewNote';
import SingleNote from './components/MainPage/ViewNotes';
import { Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
                <SideBar />
                <Route path='/your-notes' component={ViewNotes} />
                <Route path='/create-note' component={NewNote} />
            </div>
        );
    }
}

export default App;
