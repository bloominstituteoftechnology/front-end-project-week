import React from 'react';
import './noteform.css';
import { Form, FormGroup, Input} from 'reactstrap';
import LambdaButton from './lambdabutton.js';


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

  componentWillReceiveProps(newprops) {
    console.log(this.props.myMethod);
    this.setState({
      myTitle: newprops.myTitle,
      myContent: newprops.myContent
    });
  }

  render() {
    console.log(this.props.fetcher);
    return (
      <Form id="note-form" >
        <h5 className="form-heading">{this.props.topText}</h5>
        <FormGroup>
          <Input name="myTitle" onChange={this.handleFormType} id="title-input" placeholder="Note Title" value={this.state.myTitle} />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" onChange={this.handleFormType} name="myContent" id="content-input" placeholder="Note Content" value={this.state.myContent} />
        </FormGroup>
        <LambdaButton myFunc={() => this.props.myMethod(this.props.fetcher, "https://killer-notes.herokuapp.com/note/", {title: this.state.myTitle, textBody: this.state.myContent})} text="Save" color="green" />
      </Form>
    );
  }
}

export default NoteForm;
