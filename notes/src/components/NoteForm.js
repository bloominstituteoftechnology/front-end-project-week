import React from 'react';
import { Button, Input, Form, FormGroup } from 'reactstrap';

class NoteForm extends React.Component {
  componentDidMount() {
    this.props.update();
  }
  
  render() {
    const { onSubmit, onChange, title, text, formText } = this.props;
    return (
      <Form onSubmit={onSubmit} className="note-form">
        <FormGroup>
          <Input
            name="title"
            placeholder="Note Title"
            onChange={onChange}
            value={title}
            pattern="^[\s\S]{1,50}$"
            title="Title should only contain up to 50 letters"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="text"
            placeholder="Note Content"
            onChange={onChange}
            value={text}
          />
        </FormGroup>
        <Button color="info">{formText}</Button>
      </Form>
    );
  }
};

export default NoteForm;
