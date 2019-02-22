import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Notes from "./components/Notes";
import TopBar from "./components/TopBar";
import {FlexColumn} from "./components/Styles/Components";

class App extends Component {
    render() {
        return (
            <Router>
                <FlexColumn height="100vh">
                    <TopBar />
                    <Route path="/" component={Notes} />
                </FlexColumn>
            </Router>
        );
    }
}

export default App;
