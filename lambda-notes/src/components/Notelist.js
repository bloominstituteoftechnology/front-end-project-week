import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class NoteList extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => this.setState({notes: response.data}))
        .catch(err => console.log(err))
        
      }

    render() {
      return (
        <div className='main-page'>
            <p>Your notes:</p>
            <div className="noteList">
                {this.state.notes.map(note => {
                    return (
                        <div className="notes" key={note._id}>
                            <Link to={`/notes/${note._id}`}>
                                <h4>{note.title}</h4>
                                <hr></hr>
                                <p>{note.textBody}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
      )}
}

export default NoteList;