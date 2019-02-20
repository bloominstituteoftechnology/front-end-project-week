import React from 'react';
import axios from 'axios';
import './notes.css';
import { Link } from 'react-router-dom';

class Notes extends React.Component {
    state = {
        notes: [],
        newNote: {
            tag: '',
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:4200/notes/get/all')
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(error => console.log('error'))
    }

    render() {
        return (
            <div className="App">
                <div className='main-view'>
                    <div className='home-title'>
                        <h2>Your Notes: </h2>
                    </div>
                    <div className="home-body">
                        {this.state.notes.map((note, i) => (
                            <div className="note">
                                <Link to={`/note/${note.id}`}key={i} >
                                    <div className='note-title'>
                                        <h3 className='background-white'>{note.title}</h3>
                                    </div>
                                    <div className="note-body">
                                        <p className='background-white'>{note.body}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Notes;