import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import Note from './Note';
import NewNote from './NewNote';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Notes extends Component{


componentDidMount() {
    this.props.getNotes();
}

render() {
    return (
        <div className="notes">
            <h5>Your Notes:</h5>
                {this.props.notes.map(note => {
                return (
                <Link to={`/notes/${note.id}`} 
                className="note-card" key={note.id} note={note}>
                    <Card>
                        <CardBody>
                            <CardTitle>{note.title.substring(0, 21)}</CardTitle>
                            <CardText>{note.content.substring(0, 93)}</CardText>
                        </CardBody>
                    </Card>
                </Link>
                )})}
                {this.props.pending ? <h1>LOADING</h1> : null}
        </div>
    ); 
}
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        pending: state.fetchingNotes,

    }
}

export default connect(mapStateToProps, { getNotes })(Notes);
