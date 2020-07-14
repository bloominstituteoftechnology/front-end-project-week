import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, fetchData } from '../actions';
import Editview from './Editview';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateNote = e => {
    e.preventDefault();
    let updatedNote = {
      id: this.props.match.params.id,
      title: this.state.title,
      content: this.state.content
    };
    this.props.updateNote(updatedNote);
    this.props.fetchData();
    this.props.history.push('/');
  };

  render() {
    return (
      <Editview
        updateNote={this.updateNote}
        handleChange={this.handleChange}
        title={this.state.title}
        content={this.state.content}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    note: state.note
  };
};

export default connect(
  mapStateToProps,
  { updateNote, fetchData }
)(Edit);
