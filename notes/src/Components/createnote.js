import React, {Component} from 'react';
//import axios from 'axios';
import { Card, CardText, Button, Form, FormGroup, Input} from 'reactstrap';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        //  console.log(this.props)

        this.state = {
            note: []
        };
    }

render() {
    return(
        <div>
            <Form>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Note Title" />
                    <Input type="textarea" name="text" id="exampleText" placeholder="Note Content" />
                </FormGroup>
                {/* {console.log(this.props)} */}
                <Button onClick={() => this.props.createNote('Tommys notes', 'The way i started this story was ')}  color="primary" >+ Create Note</Button>{' '}
            </Form>
        </div>
    )
}
}