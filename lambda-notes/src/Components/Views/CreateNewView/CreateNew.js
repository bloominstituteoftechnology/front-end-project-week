import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'

class CreateNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        const data = this.state.location.state

        this.setState({
            note: data.note,
            title: this.data.note.title,
            body: data.note.textBody
        })
    }

    handleInputChange = event => {
        event.preventDefault() 
        this.setState({ [event.target.name]: event.target.value })
    }

    submit = event => {
        event.preventDefault()
        // if title and body is empty (didn't put that) //tags//
        
        // ============ ADD NEW NOTE ============
        const addNote = {
            title: this.state.title,
            textBody: this.state.body
        }

        // ============ UPDATE AND CREATE NOTE ============
        
        if (this.state.note === '') {
            axios
                .post('https://fe-notes.herokuapp.com/note/create', addNote)
                .then(response => console.log(response))
                .catch(error => console.log(error))
        } else {
            axios  
                .post(`https://fe-notes.herokuapp.com/note/edit/${this.state.note._id}`, addNote)
        }

        if (this.state.title === '' && this.state.note === '') {
            alert("Form is not complete!")
        }

        // ================ need to clear form ================
    }


    render() {
        return (
            <div>
                CREATE NEW PAGE
                <Form 
                    handleInputChange={this.handleInputChange}
                    textBody={this.state.body}
                    submit={this.submit}
                />
            </div>
        )
    }
}

export default CreateNew