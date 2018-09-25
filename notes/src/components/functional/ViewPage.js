import React from "react";
import { connect } from "react-redux";

import { deleteNote } from "../../store/actions";
import Modal from '../presentational/Modal';

class ViewPage extends React.Component {
  state = {
    note: {},
    showModal: false
  }

  filterProps = () => {
    this.props.notes.forEach(note => {
      if (parseInt(this.props.match.params.id, 10) === note.id) {
        this.setState({note});
      }
    });
  };

  componentWillMount() {
    this.filterProps();
  }

  toggleModal = e => {
    e.preventDefault();
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  deleteClick = (e) => {
    e.preventDefault();
    this.props.deleteNote(this.state.note)
    this.props.history.goBack();
  }

  editClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/noteform/${this.state.note.id}`)
  }

  render() {
    return (
      <div>
        <button onClick={this.editClick}>Edit</button>
        <button onClick={this.toggleModal}>Delete</button>
        <div>
          <h3>{this.state.note.title}</h3>
          <p>{this.state.note.description}</p>
        </div>
        <Modal 
          showModal={this.state.showModal}  
          toggleModal={this.toggleModal}
          deleteClick={this.deleteClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { deleteNote }
)(ViewPage);
