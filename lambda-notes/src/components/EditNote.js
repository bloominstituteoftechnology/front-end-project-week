// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styling
import { Form, Input } from "reactstrap";
import './EditNote.css';

class EditNote extends Component {
    // state = {

    // };

    render() {
        return (
            <div className='editNote'>
                <h2 className='my-3 py-3'>Edit Note:</h2>
                <Form className='form'>
                    <div>
                        <Input placeholder='Note Title'
                            type="text"
                            bsSize='lg'
                            className="form-control col-7 my-3 py-3"
                        />
                    </div>
                    <div>
                        <Input placeholder="Note Content"
                            type="textarea"
                            style={{height: 390}}
                            className="form-control"
                        />
                    </div>
                    <Link to='/' className='link m-0 mt-3'>Update</Link>
                </Form>
            </div>
        )
    } // end render()
} // end EditNote Class

export default EditNote;