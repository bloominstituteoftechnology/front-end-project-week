import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSelected } from '../actions';
import { Link } from 'react-router-dom';

class OneNote extends Component {
  state = {

  }

  render() {
    return(
      <div className="OneNote">
        <div className="header">
          <Link to=''>edit</Link>
          <a href=''>delete</a>
        </div>
        <h2>{this.props.notes[this.props.id].title}</h2>
        <p>{this.props.notes[this.props.id].text}</p>
      </div>
    )
  }

  componentWillMount = () => {
    this.props.updateSelected(this.props);
  }
}

const mapPropToStates = (state) => {
  return {
    notes: state
  }
}

export default connect(mapPropToStates, { updateSelected })(OneNote);

// state.filter(note => {
//   console.log('this.props is', this.props);
//   if (note.id === this.props.id) return note;
// })