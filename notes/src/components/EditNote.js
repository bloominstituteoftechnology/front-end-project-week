import React, { Component } from 'react';
import { Form, Input, Container, Row, Col } from 'reactstrap';
import NoteButton from './NoteButton';
import { Redirect } from 'react-router-dom';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',           
            id: '',
            edit: false
        }
    }   

    componentDidMount() {
        console.log("This Element", this.props.state.notes);
        const element = this.props.state.notes.filter((note) => {
            return (this.props.match.params.id === note.id.toString())          
                       
        })[0]
        console.log("Element", element);

           this.setState({
               title: element.title,
               content: element.content,
               id: element.id
           })
    }    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    editNote = () => {
        let myobj = {};
      this.props.state.notes.map((note) => {
         if(note.id === this.state.id) {
             myobj = {
                 title: this.state.title,
                 content: this.state.content,
                 id: this.state.id
              }            
         }
     })

     console.log("MY object", myobj )
     this.props.edit(myobj);
        this.setState({edit: true})
            }

    render() {        
        return (
            this.state.edit ? (
                <Redirect to="/"/>
            ) : (
                <Container className="form-section">
                    <h3 className="heading">Edit Note: </h3>
                    <Row>
                        <Col sm="12">
                            <Form onSubmit={this.editNote} className="form">
                                <Input 
                                    type="text" 
                                    name="title"
                                    placeholder="Note Title"
                                    value={this.state.title} 
                                    onChange={this.handleChange}
                                    className="form-title"/>
                                <Input 
                                    type="textarea" 
                                    name="content" 
                                    placeholder="Note Content"
                                    value={this.state.content}
                                    onChange={this.handleChange}
                                    className="form-content"/>
                                <NoteButton color="main" value="Save edit"/>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )
        )
    }
}
 
export default EditNote;