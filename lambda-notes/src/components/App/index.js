import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
    };

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
                <Route exact path="/" render={ props => 
                    <NoteList notes={this.state.notes} />
                }
                />
                <Route path="notes/add" render={ props =>
                    <Form
                        title={this.state.title}
                        textBody={this.state.textBody}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />}
                />
            </div>
        )
    }
}

export default App;