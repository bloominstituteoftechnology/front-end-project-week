import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class NoteList extends React.Component {
    state = {
        notes: [],
        newNote: {
            tag: '',
            title: '',
            textBody: ''
        }
    }

    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(error => console.log('error'))
    }

    render() {
        return (            
            <div className='note-list'>
                <div className='notes-header'>
                    <h2>Your Notes: </h2>
                </div>
                <div className='notes'>
                    {this.state.notes.map((note) => (
                        <div className='note'>
                            <Link to={`/note/${note._id}`}key={note._id} >                                    
                                <h3>{note.title}</h3>                             
                                <p>{note.textBody}</p>                                    
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            
        );
    }
}
export default NoteList
