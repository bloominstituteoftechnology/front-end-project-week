import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 3rem;
    padding-right: 3rem;
`

export default class EditForm extends React.Component {
  render() {
    return (
      <Content>
        <Form>
          <FormGroup>
            <Label>Edit Note:</Label>
          </FormGroup>
          <FormGroup>
            <Label for="noteContent">Password</Label>
            <Input type="text" name="content" id="noteContent" placeholder="Note Title" />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="body" id="noteBody" placeholder='Note Content'/>
          </FormGroup>
          <Button>Update</Button>
        </Form>
      </Content>
    );
  }
}
