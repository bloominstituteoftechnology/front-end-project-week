// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom';
// Components
import { addNote, editNote } from '../Actions';
import { Button } from '../Button';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "",  
        title: "",
        text: "",
        go: false,
    }
  }

  componentDidMount() {
    if (this.props.match.path === "/edit/:id") {
      const id = this.props.match.params.id;
      const note = this.props.notes.filter(note => note.id === id)[0];
      const { title, text } = note; 
      this.setState({ id: id, title: title, text: text });
    }
  }

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitNote = (e) => {
    e.preventDefault();

    const noteToSend = {
      title: this.state.title,
      text: this.state.text,
    }

    if (this.props.match.path === "/new") {
      this.props.addNote(noteToSend);
    } else {
      this.props.editNote({
        ...noteToSend,
        id: this.state.id,
      });
    }
    this.setState({
      id: "",
      title: "",
      text: "",
      go: true,
    });

  }

  render() {
    console.log("InputForm-props",this.props);
    if (this.state.go === true) return <Redirect to="/" />;
    const path = this.props.match.path;
    return (
      <div style={{background: "var(--color-bg--main)", height: "100%"}} className="p-3">
        <h3>{ path === "/new" ? `Create New ` : `Update ` } Note:</h3>
        <Form onSubmit={this.submitNote}>
          <FormGroup>
            <Input type="title" name="title" id="noteTitle" placeholder="Note Title" value={this.state.title} onChange={this.handleTextChange} />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="text" id="noteText" placeholder="Note Content" value={this.state.text} onChange={this.handleTextChange} />
          </FormGroup>
          <Button type="submit">{path === "/new" ? "Submit" : "Update"}</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { addNote, editNote })(InputForm);