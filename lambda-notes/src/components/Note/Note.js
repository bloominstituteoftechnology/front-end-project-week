import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import NoteCard from "./NoteCard";
import { getSingleNote } from "../../actions";
import { deleteNote } from "../../actions";
import { connect } from "react-redux";

class Note extends Component {
    constructor() {
        super();
        this.state = {
            id: null
        };
    }

    componentWillMount() {
        this.props.getSingleNote(this.props.match.params.id);
        this.setState({ id: this.props.match.params.id })
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.props.getSingleNote(newProps.match.params.id);
            this.setState({ id: this.props.match.params.id })
        }
    }

    removeNote = (id) => {
        this.props.deleteNote(id)
    }

    render() {
        if (!this.props.note) {
            return <div>Loading note information...</div>
        }
        return (
            <div className="noteContainer">
                <Navigation />
                <NoteCard note={this.props.note} id={this.state.id} removeNote={this.removeNote} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            note: state.note
        }
    )
}

export default connect(mapStateToProps, { getSingleNote, deleteNote })(Note); 