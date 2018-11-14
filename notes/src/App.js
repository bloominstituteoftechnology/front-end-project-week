import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NoteList from "./pages/NoteList";
import SideBar from "./components/SideBar";

class App extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <Router>
                    <div>
                        <Route exact path="/" component={NoteList} />
                    </div>
                </Router>
            </div>
        );
    };
};

export default App;
