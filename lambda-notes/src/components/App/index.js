import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../Sidebar";
import NoteList from "../NoteList";
import Form from "../Form";
import Note from "../Note";
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

    handleFormSubmit = event => {
        event.preventDefault();

    const newNote = {
        title: this.state.title,
        textBody: this.state.textBody
    };

    axios
        .post(`https://fe-notes.herokuapp.com/note/create`, newNote)
        .then(response => {
            this.refetchNotes();
            this.setState({
                title: "",
                textBody: ""
            });
        })
        .catch(error => console.log(error));
    
    this.props.history.push("/");
    };

    refetchNotes() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState(
                    {notes: response.data}
                )
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div className="App">
                <Sidebar />
                <Switch>
                <Route exact path="/" render={ props => 
                    <NoteList notes={this.state.notes} />
                }
                />
                <Route exact path="/notes/add" render={ props =>
                    <Form
                        title={this.state.title}
                        textBody={this.state.textBody}
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />}
                />
                <Route exact path="/notes/:id" render={props =>
                    <Note {...props} refetchNotes={this.refetchNotes} />}
                />
                </Switch>
            </div>
        )
    }
}

export default App;