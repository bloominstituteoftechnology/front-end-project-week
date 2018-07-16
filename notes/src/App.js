import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import SidePanel from './components/SidePanel/SidePanel'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path='/' component={SidePanel} />
            </div>
        );
    }

}
export default App;