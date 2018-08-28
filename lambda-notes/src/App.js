import React, { Component } from 'react';
import Notes from './components/MainPage/Lists';
import SideBar from './components/SideNav';
import NewNote from './components/NewNote';
import ViewNote from './components/MainPage/ViewNote';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <SideBar />
                <Notes />
                <NewNote />
                <ViewNote />
                <EditNote />
                <DeleteNote />
            </div>
        );
    }
}

export default App;
