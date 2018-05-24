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
    if (this.props.match.path === "/notes/edit/:id") {
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

    if (this.props.match.path === "/notes/new") {
      this.props.addNote(this.props.user.uid, noteToSend);
    } else {
      this.props.editNote(this.props.user.uid, this.state.id, {
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
    console.log("inputform this.state.user",this.state.user);
    if (!this.props.user) return <Redirect to ="/" />;
    if (this.state.go === true) return <Redirect to="/notes" />;
    const path = this.props.match.path;
    return (
      <div style={{background: "var(--color-bg--main)", height: "100%"}} className="p-3">
        <h3>{ path === "/notes/new" ? `Create New ` : `Edit ` } Note:</h3>
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