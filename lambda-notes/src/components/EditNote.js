// React
import React, { Component } from 'react';

// Styling
import { Col } from "reactstrap";
import { BUTTON } from './StyledComponents';

class EditNote extends Component {
    // state = {

    // };

    render() {
        return (
            <Col className='new-note'>
                <h5>Edit Note:</h5>
                <form className='form'>
                    <div>
                        <input placeholder='Note Title'
                            type="text"
                            className="form-control col-6 my-3"
                        />
                    </div>
                    <div>
                        <textarea placeholder="Note Content"
                            type="text"
                            className="form-control">
                        </textarea>
                    </div>
                    <BUTTON to='/' className='py-2'>Save</BUTTON>
                </form>
            </Col>
        )
    } // end render()
} // end EditNote Class

export default EditNote;