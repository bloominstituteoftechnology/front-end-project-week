import React from 'react';
import '../App.css';
import NewNoteForm from './NewNoteForm';

class NewNote extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: '',
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault();

        this.props.addNote(this.state)
        this.setState({
            title:'',
            textBody: '',
        })

        this.props.history.push('/');

        window.location.reload();
    }

    render () {
        return (
            <div className = 'page-header'>
                <h3>new note</h3>

                <NewNoteForm 
                title = {this.props.title} 
                textBody = {this.props.textBody} 
                submitHandler = {this.submitHandler} 
                handleChange = {this.handleChange}/>
            </div>
        )
    }
}

export default NewNote;
