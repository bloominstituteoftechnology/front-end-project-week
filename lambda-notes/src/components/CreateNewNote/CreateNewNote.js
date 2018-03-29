// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styling
import { Form, Input } from 'reactstrap';
import './CreateNewNote.css';

class CreateNewNote extends Component {
    // state = {

    // };

    render() {
        return (
            <div className='newNote'>
                <h2 className='my-3 py-3'>Create New Note:</h2>
                <Form>
                    <div>
                        <Input placeholder='Note Title'
                            type='text'
                            bsSize='lg'
                            className='form-control col-7 my-3 py-3'
                        />
                    </div>
                    <div>
                        <Input placeholder='Note Content'
                            type='textarea'
                            className='form-control mt-3'
                            style={{height: 390}}
                        />
                    </div>
                    <Link to='/' className='link m-0 mt-3'>Save</Link>
                </Form>
            </div>
        )
    } // end render()
} // end CreateNewNote Class

export default CreateNewNote;