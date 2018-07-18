import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateNote } from '../actions';
import { Link } from 'react-router-dom';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 3rem;
    padding-right: 3rem;
`

class UpdateForm extends React.Component {
  submitHandler = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.updateNote(id, {
      title: this.titleInput.value,
      textBody: this.contentInput.value
    })
    this.props.history.push(`/notes/${id}`);
  }

  render() {
    return (
      <Content>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Label>Edit Note:</Label>
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Note Title"
              type="text"
              name="title"
              innerRef={node => this.titleInput = node} />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Note Content"
              type="textarea"
              name="body"
              innerRef={node => this.contentInput = node} />
          </FormGroup>
          <Button type='submit'>Update</Button>
        </Form>
      </Content>
    );
  }
}

export default connect(null, { updateNote })(UpdateForm);
