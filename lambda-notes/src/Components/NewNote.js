import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
class NewNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes:[props.notes],
            tags:[],
            title: '',
            content: '', 
        }
        }

        inputHandler = (event) => {
                let value=event.target.value;
                let property= event.target.dataset.property;
                this.setState({[property]: value})
        }

        addNote = (event) => {
            event.preventDefault();
            console.log('This is working')
            const tags = this.state.tags;
            const title = this.state.title;
            const content = this.state.content;
            axios.post('https://fe-notes.herokuapp.com/note/create', {tags, title,content})
            .then( response => this.setState({notes: response.data}))
            .catch(err => console.log(err))
          }

    render() {

        return (
            <div className='notesContainer'>
            <h2> Create New Note: </h2>
            <div className='notesList'>
            <form><input onChange={this.inputHandler} className='title' placeholder='Note Title' type='text'></input></form>
            <textarea onChange={this.inputHandler} data-property='content' rows="20" cols="100" placeholder='Content Title'></textarea>

            <button onClick={this.addNote}>Save</button>
            </div>
            </div>
        )
    }
}

export default NewNote