import React from 'react';
import { connect } from 'react-redux';

import { deleteNote, getData } from '../../Store/actions';
import Modal from '../Views/Modal';
import Todo from './Todo';

import { Button, ViewContainer } from '../Style/styleNote';

class ViewPage extends React.Component {
  state = {
    note: {},
    showModal: false
  };

  filterProps = () => {
    this.props.notes.forEach(note => {
      if (this.props.match.params.id === note._id) {
        this.setState({ note: note });
      }
    });
  };

  componentDidMount() {
    this.props.getData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.success !== prevProps.success) {
      this.filterProps();
    }
  }

  toggleModal = event => {
    event.preventDefault();
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  deleteClick = event => {
    event.preventDefault();
    this.props.deleteNote(this.state.note._id);
    this.props.history.goBack();
  };

  editClick = event => {
    event.preventDefault();
    this.props.history.push(`/noteform/${this.state.note._id}`);
  };

  render() {
    const description =
      this.state.note.textBody === undefined
        ? []
        : this.state.note.textBody.split('\n');
    return (
      <ViewContainer>
        <Button onClick={this.editClick} className="edit">
          Edit Note
        </Button>
        <Button onClick={this.toggleModal} className="delete">
          Delete Note
        </Button>
        <div>
          <h3>{this.state.note.title}</h3>
          {description.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </div>
        <Todo />
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.state.toggleModal}
          deleteClick={this.state.deleteClick}
        />
      </ViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    success: state.success
  };
};

export default connect(
  mapStateToProps,
  { deleteNote, getData }
)(ViewPage);
