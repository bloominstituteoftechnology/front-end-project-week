import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class EditForm extends Component {
 
    render() {
        return (
            <div>
                <h4>Edit Note</h4>
                <div className='create-form'>
                    <Form>
                        <FormGroup>
                            <Input 
                                type='text' 
                                name='title' 
                                placeholder='Note Title'
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                type='textarea' 
                                name='text' 
                                placeholder='Note Content' 
                                /> 
                        </FormGroup>
                        <Link to='/'>
                            <Button className='content-btn'>
                            Update
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        )
    }
}