import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateNote } from '../actions';
import '../styles/EditNote.css';

class EditNote extends React.Component {
  state = {
    note: {...this.props.selectedNote},
    redirect: false,
  };

  saveEdit = event => {
    event.preventDefault();
    this.props.updateNote(this.state.note);
    this.setState({
      redirect: true,
    });
  };

  updateField = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="editNote__container">
        <div className="editNote__header">Create edit Note:</div>
        <form className="editNote__form" onSubmit={this.saveEdit}>
          <input
            type="text"
            value={this.state.note.title}
            name="title"
            placeholder="Note Title"
            onChange={this.updateField}
            className="editNote__title-field"
          />
          <textarea
            name="content"
            value={this.state.note.content}
            placeholder="Note Content"
            onChange={this.updateField}
            className="editNote__content-field"
          />
          <input type="submit" value="Save" className="editNote__submit" />
        </form>
        {this.state.redirect && <Redirect to={`/view/${this.state.note.id}`} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedNote: state.selectedNote,
  };
};

export default connect(mapStateToProps, { updateNote })(EditNote);
