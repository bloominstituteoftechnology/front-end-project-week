import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Modal from './Modal/Modal';
import '../App.css';


export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
    }
}
    
    componentDidMount() {
        
        if(this.props.notesData) {
        const currentNote = this.props.notesData.find(note => note._id === this.props.match.params.noteId);
        this.setState({ note: currentNote }, () => console.log("after setState:", this.state.note));
        
        }
    }

     componentDidUpdate(prevProps) {
        if(JSON.stringify(this.props.notesData) !== JSON.stringify(prevProps.notesData)) {
            //const note = this.props.notesData.find(note => note._id === parseInt(this.props.match.params.noteId, 10));
            const currentNote = this.props.notesData.find(note => note._id === this.props.match.params.noteId);
            this.setState({ note: currentNote })
        }
     }

    // getNotes = note => {
    //     this.setState({ note: note })
    // }

    deleteNote = () => {
        this.props.deleteNote(this.state.note._id);
        this.props.history.push('/notes');
    }

    tagsMap = (tags) => {
        if (this.props.notesData) {
            if (tags.length > 0) {
                return tags.map(tag => <Link to={{pathname: '/notes', state: { from: this.props.location.pathname }}}  className="tag" key={tag}><a>{tag}</a></Link>);
              }
        } 
//onClick={() => this.props.history.push(`tagged/${tag}`)
    }


    render() {
        if (!this.state.note) {
            return <div >Fetching your note...</div>;
        }

        return (
            <Fragment>
                <div className="single-note">
                <div className="edit-delete">
                <a className="plain-button" onClick={event => {
                    event.preventDefault();
                    console.log("clicked open update");
                    this.props.openUpdateForm(event, this.state.note._id)
                }}>edit</a>
                <a className="plain-button" onClick={event => {
                    this.props.showModal(event, this.state.note._id)
                }}>delete</a>
                
                </div>
                    <div className="note-info-wrapper">
                    <h1>{this.state.note.title}</h1>
                    <p className="textBody">{this.state.note.textBody}</p>
                    <p>Tags: {this.tagsMap(this.state.note.tags)}</p> 
                
                    </div>
                </div>
    
                <Modal show={this.props.show}>
                
                <div className="modal-content">
                <p>Are you sure you want to delete this note?</p>
                <div className="modalButtons">
                <button className="blueButton" onClick={this.props.showModal}>No</button>
                <button className="redButton" onClick={this.deleteNote}>Delete</button> 
                </div>
                </div>
             
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