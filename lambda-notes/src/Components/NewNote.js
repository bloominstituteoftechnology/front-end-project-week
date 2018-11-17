import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
class NewNote extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            content: '', 
        }
        }
        
        inputHandler = (event) => {
                let value=event.target.value;
                let property= event.target.dataset.property;
                console.log(value);
                this.setState({[property]: value})
        }

    render() {

        return (
            <div className='notesContainer'>
            <h2> Create New Note: </h2>
            <div className='notesList'>
            <form><input onChange={this.inputHandler} data-property='title' className='title' placeholder='Note Title' type='text'></input></form>
            <textarea onChange={this.inputHandler} data-property='content' rows="20" cols="100" placeholder='Content Title'></textarea>

            <button>Save</button>
            </div>
            </div>
        )
    }
}

export default NewNote