import React, { Component } from 'react';
import Notes from './components/MainPage/Lists';
import SideBar from './components/SideNav';
import NewNote from './components/MainPage/NewNote';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <SideBar />
                <Notes />
                <NewNote />
            </div>
        );
    }
}

export default App;
