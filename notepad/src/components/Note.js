import React, { Component } from 'react';
import { deleteNote } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from "react-bootstrap";



class Note extends Component {
    state = {
        note: null
    }
   

     editNote = () => {

    }
     deleteNote = () => {
        console.log('ID', this.props.id)
        this.props.deleteNote(this.props.id);
        console.log('TITLE', this.props.title);

    }

    // const { title, content} = props;
    // const { title, content, notes, id } = props;
    // function NoteCard({ note }) {
render(){
    return (
        
        <div className={'note'}>
            <Link to={`/notes/${this.props.id}`}>

                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
                <Button onClick={this.editNote}>Edit</Button>
                <Button onClick={this.deleteNote}>Delete</Button>
            </Link>

        </div>
    );
}


  
}

export default connect(null, { deleteNote })(Note);
