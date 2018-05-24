import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Form.css';

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
                <h3 className='note-header'>Create New Note:</h3>
                <div className='form'>
                    <Form>
                        <FormGroup>
                            <Input className='title-input'
                                type='text' 
                                name='title' 
                                placeholder='Note Title'
                                value={this.state.title}
                                onChange={this.handdleInputChange}
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input className='text-input' 
                                type='textarea' 
                                name='text' 
                                placeholder ='Note Content' 
                                value={this.state.text}
                                onChange={this.handdleInputChange}
                                /> 
                        </FormGroup>
                        <Link to='/'>
                            <button onClick={this.createNewInput} className='content-btn'>
                                Save
                            </button>
                        </Link>
                    </Form>
                </div>
            </div>
        )
    }
}
