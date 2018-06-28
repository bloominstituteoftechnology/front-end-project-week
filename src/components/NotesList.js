import React from "react";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAccount, fetchNotes } from "../actions";


class NotesList extends React.Component {

    componentDidMount() {
        if (!this.props.id) {
            const token = localStorage.getItem('jwt');
            jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
                if (err) {
                    console.log(err);
                } else {
                    const {
                        id
                    } = decoded;
                    this.props.setAccount(id);
                    this.props.fetchNotes(id);
                }
            })
        } else {
            this.props.fetchNotes(this.props.id);
        }
    }

    render() {
        const { notes } = this.props;
        return (
            <div className="notes-list">
            <h2>Your Notes:</h2>
            {notes.length !== 0 ? (
                <div>
                    {notes.map(note => {
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
            ) : (
                null)}
            </div>    
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { setAccount, fetchNotes })(NotesList);