import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            text: ''
        }    
    }

    handdleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    // createNewInput = (e, props)=> {
    //     e.preventDefault();
    //     const notes = this.props.notes
    //     const newNotes = { id: this.state.id, title: this.state.title, text: this.state.title }
    //     notes.push(newNotes);
    //     this.setState({ id: '', title: '', text: ''})
    // };

    render() {
        return (
            <div>
                <h4>Create New Note</h4>
                <div className='create-form'>
                    <Form>
                        <FormGroup>
                            <Input 
                                type='text' 
                                name='title' 
                                placeholder='Note Title'
                                value={this.state.title}
                                onChange={this.handdleInputChange}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                type='textarea' 
                                name='text' 
                                placeholder='Note Content' 
                                value={this.state.text}
                                onChange={this.handdleInputChange}
                                /> 
                        </FormGroup>
                        <Link to='/'>
                            <Button onClick={this.createNewInput} className='content-btn'>
                                Save
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        )
    }
}
