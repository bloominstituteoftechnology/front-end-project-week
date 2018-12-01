import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import NoteList from "../NoteList";
import Form from "../Form";
import "./index.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <Route exact path="/" component={NoteList} />
                <Route path="notes/add" component={Form} />
            </div>
        )
    }
}

export default App;