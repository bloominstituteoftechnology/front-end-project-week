import React from 'react';
import '../CSS/ListItem.css';
import { deleteNote, getOne } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

class ListItem extends React.Component {
  render() {
    return (
      <div className="note-card">
        <Link onClick={() => this.props.getOne(this.props.note._id)} to={{
          pathname: `/${this.props.note._id}`,
          state: {
            note: this.props.note
          }
        }}>
          <h2 className="note-card-title">{this.props.note.title}</h2>
        </Link>
        <p className="note-card-text">{this.props.note.textBody}</p>
      </div>
    )
  }
}

export default withRouter(connect(null, { deleteNote, getOne })(ListItem));