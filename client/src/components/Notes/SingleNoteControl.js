import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SingleNoteControl extends Component {
  state = {
    canEdit: false,
    title: '',
    body: ''
  };

  componentDidMount() {
    const id = this.props.match.params;
    this.props.fetchNote(id);
  }

  componentDidUpdate(prevProps) {
    const { note } = this.props.notes;
    if (prevProps.notes.note !== note) {
      this.setState({ title: note.title, body: note.textBody });
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditPerms = () => {
    this.setState({ canEdit: !this.state.canEdit });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const note = {
      title: this.state.title,
      textBody: this.state.body
    };
    this.props.updateNote(id, note);
    this.setState({ canEdit: !this.state.canEdit });
  };

  handleDelete = () => {
    const { id } = this.props.match.params;
    this.props.deleteNote(id);
    this.props.history.push('/');
  };

  render() {
    const { note } = this.props.notes;
    if (!note) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        {!this.state.canEdit ? (
          <Fragment>
            <div>
              <span onClick={this.handleEditPerms}>Edit Note</span>
              <span onClick={this.handleDelete}>Delete Note</span>
            </div>
            <h2>{note.title}</h2>
            {note.textBody}
          </Fragment>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInput}
              name="title"
              value={this.state.title}
              type=""
            />
            <textarea
              onChange={this.handleInput}
              name="body"
              value={this.state.body}
            />
            <button>Update</button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state
});
export default connect(
  mapStateToProps,
  actions
)(SingleNoteControl);
