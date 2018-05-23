// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect, withRouter } from 'react-router-dom';
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
        date: "",
        go: false,
    }
  }

  componentDidMount() {
    if (this.props.match.path === "/edit/:id") {
      const id = this.props.match.params.id;
      const note = this.props.notes.filter(note => note.id === id)[0];
      const { title, text, date } = note; 
      this.setState({ id: id, title: title, text: text, date: date });
    } else {
      this.setState({ id: "", title: "", text: "", date: "", });
    }
  }

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitNote = () => {
    const noteToSend = {
      title: this.state.title,
      text: this.state.text,
      date: this.state.date,
    }

    if (this.props.match.path === "/new") {
      this.props.addNote(noteToSend);
    } else {
      this.props.editNote(this.state.id, {
        ...noteToSend,
      });
    }
    this.setState({
      id: "",
      title: "",
      text: "",
      date: "",
      go: true,
    });

  }

  render() {
    if (this.state.go === true) return <Redirect to="/" />;
    const path = this.props.match.path;
    return (
      <div style={{background: "var(--color-bg--main)", height: "100%"}} className="p-3">
        <h3>{ path === "/new" ? `Create New ` : `Edit ` } Note:</h3>
        <Form onSubmit={(e) => {
          e.preventDefault();
          this.submitNote();
        }}>
          <FormGroup>
            <Input type="title" name="title" id="noteTitle" placeholder="Note Title" style={{width: "65%"}}value={this.state.title} onChange={this.handleTextChange} />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="text" id="noteText" placeholder="Note Content" rows="23" value={this.state.text} onChange={this.handleTextChange} />
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

export default withRouter(connect(mapStateToProps, { addNote, editNote })(InputForm));