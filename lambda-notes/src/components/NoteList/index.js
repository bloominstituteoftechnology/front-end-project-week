import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const url = `https://fe-notes.herokuapp.com/note`;

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        notes: [],
        title: "",
        textBody: "",
        loading: true
        };
    }

    // LOGIC FOR RETREIVING NOTES FROM THE SERVER
    getNotes = () => {
        axios
        .get(`${url}/get/all`)
        .then(response => {
            this.setState({ notes: response.data, loading: false });
        })
        .catch(error => {
            console.log(error);
        });
    };

    // LOGIC TO RENDER NOTES AFTER COMPONENT HAS MOUNTED
    componentDidMount() {
        this.getNotes();
    }

    render() {
        if (this.state.loading) {
        return (
            <div className="notelist">
            <h2 className="loading-text">Loading Notes...</h2>
            </div>
        );
        }

        return (
        <div className="notelist">
            <h2 className="notelist-header">Your Notes:</h2>
            <div className="note-box-grid">
            {this.state.notes.map(note => {
                return (
                <Link
                    to={`/note/${note._id}`}
                    key={note._id}
                    className="note-box"
                >
                    <div className="note-preview-container">
                    <h3>
                        {note.title.length > 15
                        ? note.title.slice(0, 15) + "..."
                        : note.title}
                    </h3>
                    <p>
                        {note.textBody.length > 150
                        ? note.textBody.slice(0, 180) + "..."
                        : note.textBody}
                    </p>
                    </div>
                </Link>
                );
            })}
            </div>
        </div>
        );
    }
}

export default NoteList;
