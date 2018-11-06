import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';


class NewNote extends React.Component {
  
  render() {
    return (
      <Form onSubmit={this.props.addNote}>
        <FormGroup row>
          <Col sm={10}>
            <Input 
              type="title" 
              name="title" 
              id="exampleTitle" 
              placeholder="Note Title"
              onChange={this.props.handleInputChange}
              value={this.props.newNote.title} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Input 
              type="textarea" 
              name="textBody" 
              id="exampleText" 
              placeholder="Note Content"
              onChange={this.props.handleInputChange}
              value={this.props.newNote.textBody} />
          </Col>
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default NewNote;