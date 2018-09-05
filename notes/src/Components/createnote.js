import React, {Component} from 'react';
//import axios from 'axios';
import { Card, CardText, Button, Form, FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        //  console.log(this.props)

        this.state = {
            title: '', 
            content: ''
        };
    }

render() {
    return(
        <div>
            <Form>
                <FormGroup>
                    <input type= 'text' placeholder = 'Note Title'  name= 'title' value = {this.state.title} onChange = {e => this.setState({ [e.target.name]: e.target.value})} />
                    <input type= 'text' placeholder = 'Note Content'   name= 'content' value = {this.state.content} onChange = {e => this.setState({ [e.target.name]: e.target.value})} />
                </FormGroup>
                {/* {console.log(this.props)} */}
                <Link to= {
                           {
                             pathname: '/',
                             
                           }
                         }>
                        
                        <Button onClick={() => this.props.createNote(this.state.title, this.state.content)}  color="primary" >+ Create Note</Button>{' '}
               </Link>
               
            </Form>
        </div>
    )
}
}