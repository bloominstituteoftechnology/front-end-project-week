import React, { Component } from 'react';
import { 
    FormWrapper, 
    FormHeader, 
    Form, 
    FormInputTitle, 
    FormInputText, 
    FormButton 
} from '../style';

class CreateNewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '' ,
            textBody: '',
            titleOne: '',
            textBodyOne: ''
        }
        
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.createNote(this.state);
        this.props.history.push('/')
        console.log('out else')
    }

    render () {
        
        return (
            <FormWrapper>
                <FormHeader>Create New Note</FormHeader>
                {/* <FormHeader>{this.props.edit ? 'Edit Note': 'Create New Note'}</FormHeader> */}
                <Form onSubmit={this.submitHandler}>
                    <FormInputTitle
                        className='title'
                        type='text'
                        maxLength='50'
                        name='title'
                        onChange={this.handleChange}
                        placeholder='Enter Title'
                        value={this.state.title}
                    />

                    <FormInputText
                        className='text'
                        type='text'
                        name='textBody'
                        required={!this.props.edit}
                        onChange={this.handleChange}
                        placeholder='Edit Text'
                        value={this.state.textBody}
                    />
                    <FormButton>Save</FormButton>
                </Form>
            </FormWrapper>
        );
    }
}

export default CreateNewNote