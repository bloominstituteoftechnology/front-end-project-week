import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';


class AddNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                title: '',
                textBody: '',
                titleError: '',
                textBodyError: ''
            }
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

        // let { title, textBody } = this.state.formErrors;
        
        // console.log(this.state.formErrors);

        // switch (name) {
        //     case 'title':
        //         formErrors.title = value.length < 3 && value.length > 0 
        //             ? 'minimum 3 characters required'
        //             : '';
        //         break;
            
        //     case 'textBody':
        //         formErrors.textBody = value.length < 10 && value.length > 0
        //             ? 'minimum 10 characters required'
        //             : '';
        //         break;
        //         default:
        //         break;
            
                
        // }
        // if (formValid(this.state.formErrors)) {

        // }
        this.props.addNote(this.state.note);
    }

    render() {

        const { title, textBody, titleError, textBodyError } = this.state.note;
        return (

            
            <form onSubmit={this.addNoteHandler} noValidate>
                <Input
                    onChange={this.changeHandler}
                    type="text"
                    value={this.state.note.title}
                    name="title"
                    placeholder="Title"
                    // titleError={t}
                    noValidate
                />

                <Input
                    onChange={this.changeHandler}
                    type="textarea"
                    value={this.state.note.textBody}
                    name="textBody"
                    placeholder="Body"
                    // textBodyError={t}
                    noValidate
                />
               
                <Button color="success" type="submit">Add Note</Button>
                
            </form>
            
        )
    }
}

export default AddNoteForm;