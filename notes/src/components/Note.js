import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal/Modal';
import '../App.css';
import axios from 'axios';


export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
    }

    
    componentDidMount() {
        console.log("noteId", this.props.match.params.noteId)
        console.log("notesData",this.props.notesData)
        const note = this.props.notesData.find(note => note.id === parseInt(this.props.match.params.noteId, 10)
     );
       console.log("note", note);
       const id = note.id;
       console.log("id", id);
       this.getNotes(note);
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)
    }

    getNotes = note => {
        this.setState({ note: note })
    }

        deleteNote = () => {
        this.props.deleteNote(this.state.note.id);
        this.props.history.push('/notes');
    }


    render() {
        if (!this.state.note) {
            return <div>Fetching your note...</div>;
        }

        return (
            <Fragment>
                <div className="single-note">
                <div className="edit-delete">
                <a className="plain-button" onClick={event => {
                    event.preventDefault();
                    console.log("clicked open update");
                    this.props.openUpdateForm(event, this.state.note.id)
                }}>edit</a>
                <a className="plain-button" onClick={event => {
                    this.props.showModal(event, this.state.note.id)
                }}>delete</a>
                
                </div>
                    <div className="note-info-wrapper">
                    <h1>{this.state.note.title}</h1>
                    <p>{this.state.note.content}</p>
                
                    </div>
                </div>
    
                <Modal show={this.props.show} className="deleteModal">
                Are you sure you want to delete this note?
                <button className="blueButton" onClick={this.props.showModal}>nope</button>
                <button className="prompt-button" onClick={this.deleteNote}>delete</button> 
                </Modal>
               
            </Fragment>
        )
    }

    

}

// function Note(props) {
//     console.log(props.match.params);

//     const note = props.notesList.find(note => note.id === parseInt(props.match.params.noteId, 10)
//     );

//     function deleteNote(){
//         props.deleteNote(note.id);
//         props.history.push('/notes');
//     }

    

//     return (
//         <Fragment>
//             <div className="single-note">
//             <div className="edit-delete">
//             <a className="plain-button" onClick={event => {
//                 event.preventDefault();
//                 console.log("clicked open update");
//                 props.openUpdateForm(event, note.id)
//             }}>edit</a>
//             <a className="plain-button" onClick={event => {
//                 props.showModal(event, note.id)
//             }}>delete</a>
            
//             </div>
//                 <div className="note-info-wrapper">
//                 <h1>{note.title}</h1>
//                 <p>{note.content}</p>
            
//                 </div>
//             </div>

//             <Modal show={props.show} className="deleteModal">
//             Are you sure you want to delete this note?
//             <button className="blueButton" onClick={props.showModal}>nope</button>
//             <button className="prompt-button" onClick={deleteNote}>delete</button> 
//             </Modal>
           
//         </Fragment>
//     )
// }

Note.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            avengerId: PropTypes.string
        })
    }),
    notesList: PropTypes.array,
    deleteNote: PropTypes.func,
    openUpdateForm: PropTypes.func
};

//export default Note;