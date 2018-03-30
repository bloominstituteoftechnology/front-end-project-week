import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import '../styling/createnote.css';
import { Link } from 'react-router-dom';

class Createnote extends Component {
    render() {
        return (
            <div className= 'createpage'>
                <h3 className= 'createtitle'>Edit Note:</h3>
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" 
                        id="exampleEmail" placeholder="Note Title"
                        className= 'inputtitle' />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="text"
                         id="exampleText" placeholder="Note Content"
                         className= 'inputcontent' />
                    </FormGroup>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                    <Link to='/noteview' style={{ textDecoration: 'none' }}><Button className= 'inputbut'>Update</Button></Link>
                    </Link>
                </Form>
            </div>
        )
    }
}

export default Createnote;