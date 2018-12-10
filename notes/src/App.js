import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";
import NoteList from "./pages/NoteList";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";
import SideBar from "./components/SideBar";
import "./css/index.css";

class App extends Component {
    state = {
        notes: []
    };

    componentDidMount() {
        this.getNotes();
    };

    getNotes = () => {
        axios.get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => {
            console.log(response.data);
            this.setState({
                notes: response.data
            });
        });
    };

    handleAddNote = (note, id) => {
        if (id === "Add") {
            axios.post("https://fe-notes.herokuapp.com/note/create", {
                title: note.title,
                textBody: note.textBody
            }).then(this.getNotes);
        } else {
            axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
                title: note.title,
                textBody: note.textBody
            }).then(this.getNotes);
        }
    };

    handleDeleteNote = id => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(this.getNotes);

        document.getElementById("delete-modal").classList.toggle("hidden");
    };

    render() {
        return (
            <div>
                <Router>
                    <div className="app">
                        <SideBar /> {/*Always display sidebar regardless of URL*/}
                        <div className="notes-display">
                            <Route exact path="/" render={ //Rendering NoteList while also passing it array of notes as a prop
                                props => <NoteList {...props} notes={this.state.notes} />
                            } />
                            <Route exact path="/view/:id" render={
                                props => <ViewNote {...props} notes={this.state.notes} delete={this.handleDeleteNote} />   
                            }/>
                            <Route exact path="/view/:id/edit" render={
                                props => <EditNote {...props} type="Edit" addNote={this.handleAddNote} notes={this.state.notes} />
                            } />
                            <Route exact path="/create" render={
                                props => <EditNote {...props} type="Add" addNote={this.handleAddNote} notes={this.state.notes} />
                            } />
                        </div>
                    </div>
                </Router>
            </div>
        );
    };
};

export default App;
