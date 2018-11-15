import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Notes from "./components/Notes";


class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Notes}/>
            </Router>
        );
    }
}

export default App;
