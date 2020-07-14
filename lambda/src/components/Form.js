import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

//importing Form CSS
import './Form.css';
import Delete from '../components/Delete'

//Class Component that will render NoteForm and its props
class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: "",
      title: ""
    };
    this.updateInput = this.updateInput.bind(this);
  }



  //method will handle the UI
  updateInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  //methods that handles the cha
  //fires when the submit button is hit
  handleClick (event) {
    console.log('STATE Before', this.state)
    event.preventDefault()
    this.setState({note: "", title: ""});
    console.log('AFTER', this.state)   
  }


  render() {
    console.log("Render STATE", this.state);
    return (
      <div>
        <div>
          <Link to="/note/edit"><h4>Edit</h4></Link>
          <Delete />
        </div>
        <Form>
        <FormGroup>
            <Label>Create Note:</Label>
            <Input 
              type="text" 
              name="title" 
              placeholder="Note Title" 
              value={this.state.title}
              onChange={this.updateInput}/>
          </FormGroup>
            <Input 
              type="textarea" 
              name="note"  
              placeholder="Note Content" 
              value={this.state.note}
              onChange={this.updateInput.bind(this)} />
              <Link to="/"> <Button onClick={() => this.props.renderNoteList(this.state.title, this.state.note)} color="info">Save</Button></Link>
          </Form>
        </div> 
      );
  }
}

export default NoteForm;