import React from 'react';
import { connect } from 'react-redux';

import { deleteNote, getData } from '../../Store/actions';
import Modal from '../Views/Modal';
import Todo from './Todo';

class ViewPage extends React.Component {
  state= {
    note: {},
    showModal: false
  }

  filterProps = () => {
    this.props.notes.forEach(note => {
      if (this.props.match.params.id === note._id) {
        this.setState({ note: note })
      }
    })
  }


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
}

deleteClick = event => {
  event.preventDefault();
  this.props.deleteNote(this.state.note._id);
  this.props.history.goBack();
}

editClick = event => {
  event.preventDefault();
  this.props.history.push(`/noteform/${this.state.note._id}`)
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    success: state.success
  }
}

export default connect(
  mapStateToProps,
    { deleteNote, getData }
)(ViewPage);