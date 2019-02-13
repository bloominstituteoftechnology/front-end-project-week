import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import Note from './Note'

class Notes extends Component {
    constructor(){
        super();
        this.state ={
            notes: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:9999/api/notes')
            .then(response => {
                this.setState(()=>({notes:response.data}));
            })
            .catch(error => {
                console.log("error", error);
            });
    }


    render(){
        return(
            <div className="notesContent">
                <h2 className="notesTitle">Your Notes:</h2>
                <div className="notesBlock">
                {this.state.notes.map( item => (
                    <Link to={`/note/${item.id}`}>
                        <Note note={item} id={item.id} key={item.id} />
                    </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Notes