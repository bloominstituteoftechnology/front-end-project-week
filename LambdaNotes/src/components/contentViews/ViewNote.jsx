import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { activateNote } from '../../actions';

class ViewNote extends Component {

  componentDidMount() {
   const id = this.props.match.params.id
    this.props.activateNote(id)
  }

  render() {
    return (
      <div>
        <Link to={`/edit/${this.props.match.params.id}`} style={{ color: 'black' }}>
          edit
        </Link>
        <p> delete</p>
        <div>
          <h1>{this.props.activeNote.title}</h1>
          <p>{this.props.activeNote.text}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote,
  };
};

export default connect(mapStateToProps, { activateNote })(ViewNote);

//need to add link to edit page and then enable delete button