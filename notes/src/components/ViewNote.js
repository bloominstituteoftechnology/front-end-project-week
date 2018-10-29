import React from 'react';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../actions';
import { NavLink } from 'react-router-dom';

// Have 
class ViewNote extends React.Component {
  constructor(props) {
    super(props)
    const { note } = this.props.location.state;

    this.state = {
      id: note.id,
      title: note.title,
      content: note.content,
      edit: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>VIEW NOTE</h2>
        {this.state.edit ?
        <EditNote /> :
        <ViewNote />
        }
      </React.Fragment>
  )
  }
};

export default connect()(ViewNote);