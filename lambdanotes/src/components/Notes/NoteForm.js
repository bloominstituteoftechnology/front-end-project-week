import React from 'react'
import '../../App.css';
import {Form, Input, Button, FormGroup} from 'reactstrap'
class NoteForm extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className='col-9 right__side'>
                <div className='row'>
                    <div className="col-3">
                        <h4>Create New Note:</h4>
                    </div>
                </div>
                <div className="row">
                    <Form>
                        <FormGroup>
                            <Input type="text" name="noteTitle" id="noteTitle" placeholder="Note Title" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="textarea" name="noteDetail" id="noteDetail" placeholder="Note Detail" />
                        </FormGroup>
                        <a href='/' className='sidebar__button'>
                            Save
                        </a>
                    </Form>
                </div>
            </div>
        );
    }
}
export default NoteForm