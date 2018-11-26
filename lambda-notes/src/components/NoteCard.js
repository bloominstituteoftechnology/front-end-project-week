import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/noteActions';
import { Link } from 'react-router-dom';

class NoteCard extends Component {

onDeleteClick = (id) => {
  this.props.deleteNote(id);
}
  render() {
    const { _id, title, textBody} = this.props.note;

    return (
      <div>
        <Link to={`/note/${_id}`} style={{textDecoration:'none'}}><a href ="#" class="card mb-4" alt="">
          <div className="title-box">
            <h3 className="card-title">{title}</h3>
        </div>
            <hr></hr>
            <div className="card-body">{textBody}</div> 
            <div class="card-footer">
              <Link to={`/edit/${_id}`}><i className="fa fa-pencil-alt"></i></Link>
            </div>  
        </a></Link> 
      </div>
    )
  }
}

export default connect(null, { deleteNote }) (NoteCard);