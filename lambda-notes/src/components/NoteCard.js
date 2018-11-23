import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletNote } from '../actions/noteActions';

class NoteCard extends Component {

onDeleteClick = (id) => {
  this.props.deletNote(id);
}
  render() {
    const { id, title, textBody} = this.props.note;

    return (
      <div>
        <a href ="#" class="card mb-4" alt="">
          <div className="title-box">
            <h4 className="card-title">{title}</h4>
        </div>
            <hr></hr>
            <div className="card-body">{textBody}</div> 
            <div class="card-footer">
                <i className="fa fa-edit"></i>
                <i className="fa fa-trash" onClick={ this.onDeleteClick.bind(this, id)}></i>
                
            </div>  
        </a>
      </div>
    )
  }
}

export default connect(null, { deletNote }) (NoteCard);