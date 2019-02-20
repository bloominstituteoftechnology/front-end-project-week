import React, { Component } from 'react';
import { Button, Input, Alert } from 'reactstrap';

const initialState = {
    
}

class AddNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                title: '',
                textBody: ''
            },
            titleError: '',
            textBodyError: ''
        }
    }
    validate = () => {
        
        let titleError = '';
        let textBodyError = '';
        if (this.state.note.title.length < 3) {
            titleError =  'Title has to have minimum 3 characters';
        }
        if (this.state.note.textBody.length < 50) {
            textBodyError = 'Body has to have minimum 50 characters';
        }
        
        if (textBodyError || titleError) {
            this.setState({
                titleError,
                textBodyError
            });
            
            return false;
        }
        else {
            return true;
        }
    
        
    }
    changeHandler = e => {
        this.setState({
            note: {
                ...this.state.note,
                [e.target.name]: e.target.value
            }
        })
    }
    addNoteHandler = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (!isValid) {
        } 
        else {
            this.props.addNote(this.state.note);
        }
    }

    render() {

        const { title, textBody } = this.state.note;
        return (
            <section>
            
                <form onSubmit={this.addNoteHandler} noValidate>
                    <h1>Add note</h1>
                    <Input
                        onChange={this.changeHandler}
                        type="text"
                        value={title}
                        name="title"
                        placeholder="Title"
                        noValidate
                    />
                    {this.state.titleError ?
                        <Alert color="danger">{this.state.titleError}</Alert>
                    :
                        null
                    }

                    <Input
                        onChange={this.changeHandler}
                        type="textarea"
                        value={textBody}
                        name="textBody"
                        placeholder="Body"
                        noValidate
                    />
                    {this.state.textBodyError ?
                        <Alert color="danger">{this.state.textBodyError}</Alert>
                    :
                        null
                    }
                
                    <Button color="success" type="submit">Add Note</Button>
                    
                </form>
            </section>   
        )
    }
}

export default AddNoteForm;