import React, {Component} from 'react';
//import axios from 'axios';
import { Card, CardText, Button, Form, FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import './createnote.css';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '', 
            content: ''
        };
    }

render() {
    return(
        <div>
            <h3>Create New Note:</h3>
            <Form>
                <FormGroup>
                    <div className="inputFields">
                        <Input type= 'text' placeholder = 'Note Title'  name= 'title' value = {this.state.title} onChange = {e => this.setState({ [e.target.name]: e.target.value})} />
                    </div>
                    <div className="inputFields">
                        <Input type= 'textarea' placeholder = 'Note Content'   name= 'content' value = {this.state.content} onChange = {e => this.setState({ [e.target.name]: e.target.value})} />
                    </div>
                </FormGroup>
                <Link to= {
                           {
                             pathname: '/',
                             
                           }
                         }>
                        
                        <Button onClick={() => this.props.createNote(this.state.title, this.state.content)}  color="info" >Save</Button>{' '}
               </Link>
               
            </Form>
        </div>
    )
}
}