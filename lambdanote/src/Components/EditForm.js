import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Form.css';

export default class EditForm extends Component {
 
    render() {
        return (
            <div>
                <h3 className='note-header'>Edit Note</h3>
                <div className='form'>
                    <Form>
                        <FormGroup>
                            <Input className='title-input'
                                type='text' 
                                name='title' 
                                placeholder='Note Title'
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input className='text-input'
                                type='textarea' 
                                name='text' 
                                placeholder='Note Content' 
                                /> 
                        </FormGroup>
                        <Link to='/'>
                            <button className='content-btn'>
                            Update
                            </button>
                        </Link>
                    </Form>
                </div>
            </div>
        )
    }
}