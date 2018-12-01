import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import NoteList from "../NoteList";
import Form from "../Form";
import axios from "axios";
import "./index.css";


class App extends Component {
    state = {
        notes: [],
        title: "",
        textBody: ""
    }

    componentDidMount() {
        this.refetchNotes();
    };

    handleInputChange = event => {
        this.setState(
            { [event.target.name]: event.target.value }
            );
    };

    handleFormSubmit() {}

    refetchNotes() {
        axios
            .get("https://fe-notes.herokuapp.com/note/get/all")
            .then(response => {
                this.setState(
                    {notes: response.data}
                )
            });
            // .catch(error => console.log(error));
    };

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