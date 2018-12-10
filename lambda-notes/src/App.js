import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SideBar />
                <Content />
            </div>
        );
    }
}

export default App;
