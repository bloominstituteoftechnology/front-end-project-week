import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addNote } from "../../actions";
import {
  UncontrolledAlert,
  Label,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Button
} from "reactstrap";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      tags: "",
      state: 0
    };
  }
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    localStorage.setItem("location", this.props.location.pathname);
  }
  onSubmitHandler = e => {
    e.preventDefault();
    if (this.state.title.length === 0 || this.state.content.length === 0) {
      this.setState({ state: 1 });
    } else {
      const token = localStorage.getItem("jwt");
      const reqOptions = {
        headers: {
          Authorization: token
        }
      };
      let tags;
      if (this.state.tags.length > 0) {
        tags = this.state.tags
          .replace(/,/g, "")
          .replace(/\s+/g, " ")
          .replace(/\s/g, ", ");
        if (tags[tags.length - 2] === ",") {
          tags = tags.substring(0, tags.length - 2);
        }
      }
      const newNote = {
        title: this.state.title,
        textBody: this.state.content,
        tags: tags !== undefined ? tags : null,
        user_id: localStorage.getItem("id")
      };
      this.props.addNote(newNote, this.props.history, reqOptions);
    }
  };
  render() {
    return (
      <Container className="createNoteForm">
        {this.state.state === 1 ? (
          <UncontrolledAlert
            onClick={() => this.setState({ state: 0 })}
            color="primary"
          >
            A note must have both a title and content.
          </UncontrolledAlert>
        ) : null}
        <Form>
          <Col>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Enter title"
                value={this.state.title}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Content</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                placeholder="Enter content"
                value={this.state.content}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Tags</Label>
              <Input
                type="text"
                name="tags"
                id="tags"
                placeholder="Enter tags"
                value={this.state.tags}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Button type="submit" onClick={this.onSubmitHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps, { addNote })(withRouter(NewNote));
