import React, {Component} from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Col, Input, Button, Container } from 'reactstrap';


const URL = 'http://localhost:9000/notes';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: ''
         }
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    add = event => {
        event.preventDefault();
        const newNote = {
          title: this.state.title,
          content: this.state.content
        }
        axios.post(URL, newNote) 
          .then(response => {
            console.log(response);
            console.log(response.data);
            window.location = '/notes';
          })
          .catch(error => {
            console.log(error);
          })
          this.setState({
            title: '',
            content: ''
          });
    }
    render() { 

        const {title, content} = this.state;
       
        return ( 
            <Container style={{border: '1px solid gray', borderRadius: '5px', padding: '10px', marginTop: '10px', background: 'rgba(128, 128, 128, 0.5)'}}>
                <Form>
                <h1>Add new note</h1>
                    <FormGroup row >
                        <Label for="title" sm={2} size="lg">Title</Label>
                            <Col sm={12}>
                                <Input type="text" name="title" placeholder="Note title" bsSize="lg" value={title} onChange={(event) => this.change(event)} />
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="content" sm={2} size="lg">Content</Label>
                            <Col sm={12}>
                                <Input type="textarea" name="content"  placeholder="Note content" bsSize="lg" value={content}  onChange={(event) => this.change(event)} style={{minHeight: '400px'}} />
                            </Col>
                    </FormGroup>
                    <Button size='lg' color='primary' type='submit' onClick={this.add}>Save</Button>
                </Form>
            </Container>
         );
    }
}


 
export default NewNote;