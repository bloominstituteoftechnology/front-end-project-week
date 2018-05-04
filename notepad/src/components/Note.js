import React, { Component } from 'react';
import { deleteNote, getNote } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";



class Note extends Component {
    

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
    }
   

     editNote = () => {
         this.props.editNote(this.props.note.id);
         this.props.history.push(`/notes/edit/${this.props.note.id}`)

    }
     deleteNote = () => {
        console.log('ID', this.props.note.id)
        this.props.deleteNote(this.props.note.id);
        console.log('TITLE', this.props.title);
         this.props.history.push(`/notes/`)

    }

    // const { title, content} = props;
    // const { title, content, notes, id } = props;
    // function NoteCard({ note }) {
render(){
// console.log(this.props.note)
    return (
        <div key={this.props.note.id}> 
            <div className={'note'}>
                    <h2>{this.props.note.title}</h2>
                    <p>{this.props.note.content}</p>
                    <Button onClick={this.editNote}>Edit</Button>
                    <Button onClick={this.deleteNote}>Delete</Button>
            </div>
        </div>
    );
}
 
}

const mapStateToProps = state => {
    return {
        note: state.note,
        error: state.error,
        pending: state.fetchingNotes,

    }
}

export default connect(mapStateToProps, { getNote, deleteNote })(Note);

// export default Note
