import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route path="/"
                    render = {(props) => <SideNav />}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;