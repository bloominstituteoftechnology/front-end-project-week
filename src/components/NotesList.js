import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes } from "../actions";

class NotesList extends React.Component {
    
    componentDidMount() {
        this.props.fetchNotes(this.props.id);
    }

    render() {
        return (
            <div className="notes-list">
            <h2>Your Notes:</h2>
                {this.props.notes.map(note => {
                    return (
                        <div key={note._id}>
                            <Link to={`/${note._id}`}>
                                <div className="note-card">
                                    <h3>{note.title}</h3>
                                    <p className="note-card-text">{note.body}</p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>    
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { fetchNotes })(NotesList);