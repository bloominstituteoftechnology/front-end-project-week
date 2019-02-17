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

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();

        this.props.addNote(this.state)
        this.setState({
            title:'',
            textBody: '',
        })

        this.props.history.push('/');
    }

    render() {
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
