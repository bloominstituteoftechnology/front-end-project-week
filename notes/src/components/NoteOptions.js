import React, { Component } from 'react';

import { Route, withRouter, Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNote } from '../actions'

class NoteOptions extends Component {

  handleClick = (event) => {
    console.log('click firing');
    this.props.deleteNote(this.props.match.params.id)
  }

  render() {
    console.log(this.props);
    let ans = this.props.noteList.find(item => item._id = this.props.match.params.id)
    console.log('Ans:', ans);
    if (ans) {
      return(
        <div className="note-options">
          <NavLink to={`/edit-note/${ans._id}`}> edit </NavLink>
          <button
            className='delete-button'
            onClick={this.handleClick}>Delete Me</button>
        </div>)
    } else { return (<p> waiting </p>) }
  }

}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default withRouter(connect(mapStateToProps, { deleteNote })(NoteOptions))
