import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class AddNote extends Component {
    constructor(){
        super();
        this.state={
            titel: '',
            content: ''
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        this.props.addNewNotecard(this.state);
    }

    render() {
        return(
            <div className='body'>
                <h1 className='sub-header'>Create New Note:</h1>
                <Form>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type='text' className='noteTitle mt-4' name='Title' id='Title' placeholder='Note Title'/>
                    </FormGroup>
                    <FormGroup>
                        <Input type='textarea' className='noteContent'name='Content' id='Content' placeholder='Note Content' />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type='text' className='noteTitle mt-4' name='Title' id='Title' placeholder='Note Title'/>
                    </FormGroup>
                </Form>    
                        <Link className='' to='/'>
                        <button onClick={this.handleSubmit} className='navButton_save mt-2'>Save Note</button>
                        </Link>
            </div>
        )
    }
}

export default AddNote;