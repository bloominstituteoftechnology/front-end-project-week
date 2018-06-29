import React from "react";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAccount, fetchNotes, loggedIn } from "../actions";


class NotesList extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        if (!token) this.props.history.push('/');

        if (!this.props.id) {
            const requestOptions = { headers: { Authorization: token } };
            jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
              if (err || !decoded) {
                console.log(err);
                this.props.loggedIn();
                this.props.history.push('/');
              } else {
                const { id } = decoded;
                this.props.setAccount(id);
                this.props.fetchNotes(id, requestOptions);
              }
            })
        } else {
            const id = this.props.id;
            const requestOptions = { headers: { Authorization: token } };
            this.props.fetchNotes(id, requestOptions);
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
                                <Link to={`/note/${note._id}`}>
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

export default connect(mapStateToProps, { setAccount, fetchNotes, loggedIn })(NotesList);