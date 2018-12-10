import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
import notes from './testNotes';
class App extends Component {
    render() {
        return (
            <div className="App">
                <SideBar />
                <Content notes={notes} />
            </div>
        );
    }
}

export default App;
