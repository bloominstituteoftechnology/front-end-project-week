import React, {Component} from 'react';
import axios from 'axios';
import { Col, Button, Form, Label, Input } from 'reactstrap';

class EditNote extends Component {
    constructor(props) {
      super(props);
        this.state = {
            title: '',
            textbody: ''
        }
    }

    componentDidMount = () => {
       
        axios
        .get(`http://localhost:8000/api/notes`)
        .then(res => {
            let notes = res.data;
            let note = notes.filter(note => {
                if (this.props.match.params.id === note.id){
                    return note;
                }
            }) [0];
        })
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    updateNote = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const newNote = {
            title: this.state.title,
            textbody: this.state.textbody,
        };
        axios
          .put  (`http://localhost:8000/api/notes/${id}/`, newNote)
          .then (res => this.setState({notes: res.data}))
          .then (
                this.setState({ 
                    title: '',
                    textbody: '',
                    id: this.props.id
                }) )
            .then(() => {this.props.history.push('/')})
          .catch(err => console.log(err));
        
    };

    render(){
        return (
            <div className="group">
                <Form onSubmit={this.updateNote} >
                <Label for="title" lg={12}>Title</Label>
                    <Col lg={12}>
                        <Input 
                            onChange = {this.handleInputChange}
                            placeholder = 'Title'
                            name = 'title'
                            value= {this.state.title}
                        />
                    </Col>
                    <Label lg={12} for="textBody">Text Area</Label>
                        <Col lg={12}>
                            <Input 
                                type="textarea"
                                onChange = {this.handleInputChange}
                                placeholder = 'Text Body'
                                name= 'textbody'
                                value= {this.state.textbody}
                            />
                        </Col>
                        <br/>
                    <Button type='submit' >Save</Button>
                </Form>
            </div>
        );
    }
};

export default EditNote;

