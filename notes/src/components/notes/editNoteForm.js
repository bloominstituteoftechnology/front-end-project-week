import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateNote} from '../../actions';
import {
  UncontrolledAlert,
  Label,
  Container,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

class EditNoteForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      content: '',
      note_id: '',
      tags: '',
      state: 0,
    };
  }
  onChangeHandler = e => {
    this.setState ({[e.target.name]: e.target.value});
  };
  componentDidMount () {
    localStorage.setItem ('location', this.props.location.pathname);
    if (this.props.note.title && this.props.note.textBody) {
      this.setState (
        {
          title: this.props.note.title,
          content: this.props.note.textBody,
          note_id: this.props.note.id,
          tags: this.props.note.tags
            ? this.props.note.tags.replace (/,/g, '')
            : '',
        },
        () => localStorage.setItem ('note', JSON.stringify (this.state))
      );
    } else {
      const note = JSON.parse (localStorage.getItem ('note'));
      this.setState ({
        title: note.title,
        content: note.content,
        note_id: note.note_id,
        tags: note.tags,
      });
    }
  }
  onSubmitHandler = e => {
    e.preventDefault ();
    if (this.state.title.length === 0 || this.state.content.length === 0) {
      this.setState ({state: 1});
    } else {
      let tags;
      if (this.state.tags.length > 0) {
        tags = this.state.tags
          .replace (/,/g, '')
          .replace (/\s+/g, ' ')
          .replace (/\s/g, ', ');
        if (tags[tags.length - 2] === ',') {
          tags = tags.substring (0, tags.length - 2);
        }
      }
      const editedNote = {
        title: this.state.title,
        textBody: this.state.content,
        tags: tags !== undefined ? tags : null,
        user_id: localStorage.getItem ('id'),
      };
      this.props.updateNote (
        this.state.note_id,
        editedNote,
        this.props.history
      );
    }
  };
  render () {
    return (
      <Container className="editNoteForm">
        {this.state.state === 1
          ? <UncontrolledAlert
              onClick={() => this.setState ({state: 0})}
              color="primary"
            >
              A note must have both a title and content.
            </UncontrolledAlert>
          : null}
        <Form>
          <Col>
            <FormGroup>
              <Label>Updated Title</Label>
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
              <Label>Updated Content</Label>
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
              <Label>Updated Tags</Label>
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
          <Button color="primary" type="submit" onClick={this.onSubmitHandler}>
            Update
          </Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    note: state.note,
  };
};
export default connect (mapStateToProps, {updateNote}) (
  withRouter (EditNoteForm)
);
