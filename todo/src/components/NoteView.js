import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Note from './Note';
import AlertDialogue from './AlertDialogue'
import Dialog from '@material-ui/core/Dialog';


// wrap individual note component in Note, and link using route
// usually notes/$id

// props aren't being passed into noteView



class NoteView extends Component {
    constructor(props){
        super(props)
        console.log(`hello`)
        this.state = {
            title: '',
            textBody: '',
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
        .then(response => {
            this.setState({title: response.data.title, textBody: response.data.textBody})
        })
        .catch(err => {
            console.log(err)
        })
    }

    deleteNote = (id) => {
        // make this a method and then call it 
        // new function deleter trips the deleteNote function
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then (response => {
            this.setState({notes: response.data})
        })
    }

    handleClickOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }
    
    render() {
        return(
            <div className="note-view">
                <h2>{this.state.title}</h2>
                <p>{this.state.textBody}</p>
                <Link to={`/notes/${this.props.match.params.id}/edit/`}><button className="button" >Update me</button></Link>
                <div className="alert-dialogue">
                <button className="button" onClick={this.handleClickOpen}>Delete Note with new thing</button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                        <p>Are you sure you want to delete this note? I haven't learned enough React to undelete notes.</p>
                        <button className="button" onClick={this.handleClose}>Cancel</button>
                        <Link to="/"><button className="button" onClick={event => this.deleteNote(this.props.match.params.id)}>Delete</button></Link>
                    </Dialog>
            </div>
            </div> 
        )
    }
}

export default NoteView