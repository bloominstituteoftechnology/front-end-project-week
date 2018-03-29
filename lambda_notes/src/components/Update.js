import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import './Update.css';

class Update extends Component {
  constructor(props){
    super(props);
    this.state={
       title:'',
       content:'', 
      }
  }

  updateTitle = event => {
    this.setState({title: event.target.value});
  }
  
  updateContent = event => {
    this.setState({content: event.target.value});
  }

  updateNoteChild (event) {
    event.preventDefault();
    console.log(this.props.match.params.id);
    const UpdatedNote = {
      title: this.state.title,
      content: this.state.content,
      id: Number(this.props.match.params.id), //available because of withrouter
    }
    this.props.updateNote(UpdatedNote)
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="Container">
        <Form className="updateForm" onSubmit={this.updateNoteChild.bind(this)}>
          <FormGroup>
            <Label>Update Note:</Label>
            <Input
              onChange={this.updateTitle}
              type="text"
              name="Note"
              placeholder="Note Title"
            />
            <Input
              onChange={this.updateContent}
              type="textarea"
              name="text"
              placeholder="Note Content"
            />
          </FormGroup>
          <Button type="submit">
          update
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Update);
