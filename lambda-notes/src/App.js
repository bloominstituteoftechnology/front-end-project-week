import React, { Component } from 'react';
import Notes from './components/MainPage/Lists';
import SideBar from './components/SideNav';
import NewNote from './components/MainPage/NewNote';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/MainPage/EditNote';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <SideBar />
                <Notes />
                <NewNote />
                <EditNote />
                <DeleteNote />
            </div>
        );
    }
}

export default App;
