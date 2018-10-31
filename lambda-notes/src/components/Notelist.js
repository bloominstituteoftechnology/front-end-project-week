import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class NoteList extends Component {
    state = {
        notes: []
    }

    componentDidMount() {
        axios
        .get('https://agile-savannah-13496.herokuapp.com/api/notes')
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
                        <div className="notes" key={note.id}>
                            <Link to={`/notes/${note.id}`}>
                                <h4>{note.id} -- 
                                {note.title}</h4>
                                <hr></hr>
                                <p>{note.description}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
      )}
}

export default NoteList;