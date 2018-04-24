//IMPORTS
import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

//ADD NOTE COMPONENT
class AddNote extends Component {
    render() {
        return(
            <div className='body'>
                <h1 className='sub-header'>Create New Note:</h1>
                <Form>
                    <FormGroup>
                        <Input type='text' className='noteTitle mt-4' name='noteTitle' id='Title' placeholder='Note Title' />
                    </FormGroup>
                    <FormGroup>
                        <Input type='textarea' className='noteContent'name='noteBody' id='Body' placeholder='Note Content' />
                    </FormGroup>
                    <FormGroup>
                        <Link className='' to='/'>
                        <button className='navButton save mt-2'>Save Note</button>
                        </Link>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default AddNote;