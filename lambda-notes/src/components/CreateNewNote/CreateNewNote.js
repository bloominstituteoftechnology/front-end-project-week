// React and Router
import React, { Component } from 'react';

// Styling
import { Col } from 'reactstrap';
import { BUTTON } from '../StyledComponents'

class CreateNewNote extends Component {
    // state = {

    // };

    render() {
        return (
            <Col style={{backgroundColor: '#f3f3f3'}} className='px-4'>
                <h5 className='pt-5'>Create New Note:</h5>
                <form>
                    <div>
                        <input placeholder='Note Title'
                            type='text'
                            className='form-control col-7 mt-4 py-2'
                        />
                    </div>
                    <div>
                        <textarea placeholder='Note Content'
                            type='text'
                            className='form-control col-12 mt-3'
                            style={{height: 310}}>
                        </textarea>
                    </div>
                    <BUTTON to='/' className='col-4 mt-3 py-2'>Save</BUTTON>
                </form>
            </Col>
        )
    } // end render()
} // end CreateNewNote Class

export default CreateNewNote;