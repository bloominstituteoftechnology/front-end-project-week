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
            .get('https://fe-notes.herokuapp.com/note/get/all')
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
                <h2>Your Notes:</h2>
                <div className="notesBlock">
                {this.state.notes.map( item => (
                    <Link to={`/note/${item._id}`}>
                        <Note note={item} id={item._id} key={item._id} />
                    </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Notes