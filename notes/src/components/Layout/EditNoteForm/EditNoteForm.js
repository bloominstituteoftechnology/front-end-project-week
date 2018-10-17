import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";

export default class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: "",
      textBody: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://killer-notes.herokuapp.com/note/get/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        this.setState(response.data);
      });
  }
  editNote = event => {
    event.preventDefault();
    axios.put(
      `https://killer-notes.herokuapp.com/note/edit/${
        this.props.match.params.id
      }`,
      {
        ...this.state
      }
    );
    this.setState({
      tags: [],
      title: "",
      textBody: ""
    });
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Edit Note:</h2>
        <Form onSubmit={this.editNote}>
          <FormGroup>
            <Input
              onChange={this.handleInputChange}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Note Title"
            />
          </FormGroup>
          <FormGroup>
            <Input
              onChange={this.handleInputChange}
              value={this.state.textBody}
              type="textarea"
              name="textBody"
              placeholder="Note Content"
            />
          </FormGroup>
          <Button type="submit">Update</Button>
        </Form>
      </div>
    );
  }
}
