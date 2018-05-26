import React, { Component } from "react";
import axios from "axios";
import Navigation from "../Navigation/Navigation";
import NoteCard from "./NoteCard";
import {getNotes} from "../../actions"; 
import { deleteNote } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            id: null
        };
    }

    componentWillMount() {
        this.props.getNotes(); 
        this.fetchNote(this.props.match.params.id);
        this.setState({ id: this.props.match.params.id })
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchNote(newProps.match.params.id);
            this.setState({ id: this.props.match.params.id })
        }
    }

    fetchNote = (id) => {
        axios.get(`http://localhost:5000/api/notes/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(error => console.log(error))
    }

    removeNote = (id) => {
        this.props.deleteNote(id)
    }

    render() {
        if (!this.state.note) {
            return <div>Loading note information...</div>
        }
        return (
            <div className="noteContainer">
                <Navigation />
                <NoteCard note={this.state.note} id={this.state.id} removeNote={this.removeNote} />
            </div>
        )
    }
}

export default withRouter(connect(null, { getNotes, deleteNote })(Note)); 