import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
class NewNote extends Component {

    constructor() {
        super();
            }

    render() {

        return (
            <div className='notesList'>
            <h2> Create New Note: </h2>
            <form><input className='title' placeholder='Note Title' type='text'></input></form>
            <textarea rows="20" cols="100" placeholder='Content Title'></textarea>

            <button>Save</button>
            </div>
        )
    }
}

export default NewNote