import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
class NotesList extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
            axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => this.setState({notes: response.data}))
            .catch(err => console.log('There is a Note Error'))
    }

    render() {

        return (
            <div className='notesList'>
            <h2> Your Notes </h2>
            {this.state.notes.map( jot => <Note title={jot.title} key={jot._id} textBody={jot.textBody} jot={jot} />)}
            Yep it works
            </div>
        )
    }
}

export default NotesList