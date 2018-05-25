import React from 'react';
import './noteform.css';
import { Form, FormGroup, Input} from 'reactstrap';
import LambdaButton from './lambdabutton.js';

//This form is able to create or edit depending on its props, and could do other
//things as well if new callback functions were made for it.
class NoteForm extends React.Component {

  //Store the inputs on local component state for the moment.
  constructor(props) {
    super(props);
    this.state = {
      myTitle: props.myTitle,
      myContent: props.myContent
    }
  }

  //Update component state as user types.
  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  //This component needs to update its state when it gets new props.
  componentWillReceiveProps(newprops) {
    this.setState({
      myTitle: newprops.myTitle,
      myContent: newprops.myContent
    });
  }

  //The HTML:
  render() {
    return (
      <Form id="note-form" >
        <h5 className="form-heading">{this.props.topText}</h5>
        <FormGroup>
          <Input name="myTitle" onChange={this.handleFormType} id="title-input" placeholder="Note Title" value={this.state.myTitle} />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" onChange={this.handleFormType} name="myContent" id="content-input" placeholder="Note Content" value={this.state.myContent} />
        </FormGroup>
        <LambdaButton myFunc={() => this.props.myMethod(this.props.fetcher, "https://killer-notes.herokuapp.com/note/", {title: this.state.myTitle, textBody: this.state.myContent}, this.props.myId)} text="Save" color="green" />
      </Form>
    );
  }
}

export default NoteForm;
