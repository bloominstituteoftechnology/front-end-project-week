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
        tags: "",
        go: "no",
    }
  }

  componentDidMount() {
    // If we're editing, we're going to prefill the fields with data from the note being edited.
    if (this.props.match.path === "/notes/edit/:id") {
      // Find the note we're editing from our state of notes
      const id = this.props.match.params.id;
      const note = this.props.notes.filter(note => note.id === id)[0];
      // Set state, thus setting values for the input fields
      const { title, text, date, tags } = note; 
      this.setState({ id: id, title: title, text: text, date: date, tags: tags, });
    } else {
      // If we're not editing, make sure all the fields are empty.
      this.setState({ id: "", title: "", text: "", date: "", tags: "", });
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
      tags: this.state.tags,
    }

    const myResetObj = {
      id: "",
      title: "",
      text: "",
      date: "",
      tags: "",
      go: "no",
    };

    if (this.props.match.path === "/notes/new") {
      myResetObj.go = "new";
      this.props.addNote(this.props.user.uid, noteToSend);
    } else {
      myResetObj.go = "edit";
      this.props.editNote(this.props.user.uid, this.state.id, {
        ...noteToSend,
      });
    }
    this.setState(myResetObj);

  }

  render() {
    console.log("inputform this.state.user",this.state.user);
    if (!this.props.user) return <Redirect to ="/" />;
    if (this.state.go === "new") return <Redirect to="/notes" />;
    if (this.state.go === "edit") return <Redirect to={`/notes/${this.props.match.params.id}`} />; 
    const path = this.props.match.path;
    return (
      <div style={{background: "var(--color-bg--main)", height: "100%"}} className="p-3">
        <h3>{ path === "/notes/new" ? `Create New ` : `Edit ` } Note:</h3>
        <Form onSubmit={(e) => {
          e.preventDefault();
          this.submitNote();
        }}>
          <FormGroup>
            <Input type="title" name="title" id="noteTitle" placeholder="Note Title" style={{width: "65%"}} value={this.state.title} onChange={this.handleTextChange} />
          </FormGroup>
          <FormGroup>
            <Input type="text" name="tags" id="noteTags" placeholder="Tags" value={this.state.tags} onChange={this.handleTextChange} />
            <Input type="textarea" name="text" id="noteText" placeholder="Note Content" rows="23" value={this.state.text} onChange={this.handleTextChange} />
          </FormGroup>
          <Button type="submit">{path === "/notes/new" ? "Submit" : "Update"}</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes,
    user: state.userReducer.user,
  };
};

export default withRouter(connect(mapStateToProps, { addNote, editNote })(InputForm));