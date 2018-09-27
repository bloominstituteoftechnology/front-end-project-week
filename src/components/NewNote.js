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
            <Container>
                <Form>
                    <FormGroup row >
                        <Label for="title" sm={2} size="lg">Title</Label>
                            <Col sm={12}>
                                <Input type="text" name="title" placeholder="Note title" bsSize="lg" value={title} onChange={(event) => this.change(event)} />
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="content" sm={2} size="lg">Content</Label>
                            <Col sm={12}>
                                <Input type="textarea" name="content"  placeholder="Note content" bsSize="lg" value={content}  onChange={(event) => this.change(event)} />
                            </Col>
                    </FormGroup>
                    <Button color='primary' type='submit' onClick={this.add}>Save</Button>
                </Form>
            </Container>
         );
    }
}


 
export default NewNote;