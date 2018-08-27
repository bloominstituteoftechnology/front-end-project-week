import React, { Component } from 'react';
import Notes from './components/MainPage/Lists';
import SideBar from './components/SideNav';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <SideBar />
                <Notes />
            </div>
        );
    }
}

export default App;
