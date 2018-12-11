import React, { Component } from 'react';
import { FormWrapper, FormHeader, Form, FormInputTitle, FormInputText } from '../style';


class CreateNewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

  

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        if(this.props.edit) {
            this.props.editNote(
                this.state,
                this.props.match.params._id); 
        } else {
            this.props.createNote(this.state);
        }
        this.props.history.push('/');
    }
    render () {
        console.log(this.state)
        return (
            <FormWrapper>
                <FormHeader>{this.props.edit ? 'Edit Note': 'Create New Note'}</FormHeader>
                <Form onSubmit={this.submitHandler}>
                    <FormInputTitle
                        className='title'
                        type='text'
                        name='title'
                        onChange={this.handleChange}
                        placeholder='Enter Title'
                        value={this.state.title}
                    />

                    <FormInputText
                        className='text'
                        type='text'
                        name='textBody'
                        onChange={this.handleChange}
                        placeholder='Enter Text'
                        value={this.state.textBody}
                    />
                    <button >{this.props.edit ? 'Edit Note': 'Create New Note'}</button>
                </Form>
            </FormWrapper>
        );
    }
}

export default CreateNewNote