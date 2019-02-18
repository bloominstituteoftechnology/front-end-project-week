import React from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Note extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            note: null,
            notes: []
        }
    }
    
    componentDidMount() {

        axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
            
            this.setState({ 
                notes: response.data
                
            });
            
            let activeNote = this.state.notes.find(note => note._id === this.props.match.params.id);
            activeNote._id = this.props.match.params.id;

            this.setState({ 
                note: activeNote
                
            });
            this.props.viewNote(this.state.note._id);
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <section>
                
                <NoteCard { ...this.state.note } editNote={this.props.editNote} /> 

                <Link to={`/edit/${this.props.match.params.id}`}>
                    <Button color="warning">Edit <FaEdit/></Button>
                </Link>

                <Button color="danger" onClick={() => this.props.deleteNote(this.props.match.params.id)}>Delete <FaTrashAlt/></Button>

            </section>
        )
    }
}

export default Note;