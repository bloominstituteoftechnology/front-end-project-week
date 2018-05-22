import React from 'react';
import './noteform.css';
import { Form, FormGroup, Input} from 'reactstrap';


class NoteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myTitle: props.myTitle,
      myContent: props.myContent
    }
  }

  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Form>
        <h5>{this.props.topText}</h5>
        <FormGroup>
          <Input name="myTitle" onChange={this.handleFormType} id="title-input" placeholder="Note Title" value={this.state.myTitle} />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" onChange={this.handleFormType} name="myContent" id="content-input" placeholder="Note Content" value={this.state.myContent} />
        </FormGroup>
      </Form>
    );
  }
}

export default NoteForm;
