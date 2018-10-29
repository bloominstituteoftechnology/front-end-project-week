import React from 'react';
import { connect } from 'react-redux';

import { deleteNote, getData } from '../../store/actions';
import Modal from '../presentational/Modal';
// import Todo from './Todo'

import { Button, ViewContainer } from '../style/noteStyle';

class ViewPage extends React.Component {
  state = {
    note: {},
    showModal: false,
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

  toggleModal = e => {
    e.preventDefault();
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  deleteClick = e => {
    e.preventDefault();
    this.props.deleteNote(this.state.note._id);
    this.props.history.goBack();
  };

  editClick = e => {
    e.preventDefault();
    this.props.history.push(`/noteform/${this.state.note._id}`);
  };

  render() {
    const description =
      this.state.note.textBody === undefined
        ? []
        : this.state.note.textBody.split('\n');
    return (
      <ViewContainer>
        <Button onClick={this.editClick} className="left">
          edit
        </Button>
        <Button onClick={this.toggleModal}>delete</Button>
        <div>
          <h3>{this.state.note.title}</h3>
          {description.map((descript, index) => {
            return <p key={index}>{descript}</p>;
          })}
        </div>
        {/* <Todo /> */}
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          deleteClick={this.deleteClick}
        />
      </ViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    success: state.success,
  };
};

export default connect(
  mapStateToProps,
  { deleteNote, getData }
)(ViewPage);
