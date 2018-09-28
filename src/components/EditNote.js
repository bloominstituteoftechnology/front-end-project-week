import React, {Component} from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Col, Input, Button, Container } from 'reactstrap';


const URL = 'https://das-ma.herokuapp.com/notes/';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            id: 0
         }
    }

componentDidMount () {
    const id = Number(this.props.match.params.id);
        axios.get(URL)
        .then(response => {
            let matching = response.data.find(note => note.id === id);
            this.setState({
                title: matching.title,
                content: matching.content,
                id: matching.id
            });
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    change = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    update = (event) => {
        event.preventDefault();
        const updatedNote = {
            title: this.state.title,
            content: this.state.content
        }
        axios.put(`${URL}${this.state.id}`, updatedNote)
        .then(response => {
            console.log(response);
            console.log(response.data);
            window.location = '/notes';
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() { 
        
        return (
            <Container style={{border: '1px solid gray', borderRadius: '5px', padding: '10px', marginTop: '10px', background: 'rgba(128, 128, 128, 0.5)'}}>
                <Form>
                    <FormGroup row >
                        <Label for="exampleEmail" sm={2} size="lg">Title</Label>
                            <Col sm={12}>
                                <Input type="text" name="title" placeholder="Note title" bsSize="lg" value={this.state.title} onChange={this.change} />
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2} size="lg">Content</Label>
                            <Col sm={12}>
                                <Input type="textarea" name="content"  placeholder="Note content" bsSize="lg" value={this.state.content} onChange={this.change} style={{minHeight: '400px'}}/>
                            </Col>
                    </FormGroup>
                    <Button size='lg' color='primary' type='submit' onClick={this.update}>Update</Button>
                </Form>
            </Container>
         );
    }
}
 
export default EditNote;