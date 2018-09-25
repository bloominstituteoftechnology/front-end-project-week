import React from 'react';
import '../CSS/ListItem.css';
import { deleteNote } from '../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ListItem extends React.Component {
  render() {
    return (
      <div className="note-card">
        <Link style={{color: 'black'}} to={{
          pathname: `${this.props.note.title}/${this.props.note._id}`,
          state: {
            note: this.props.note
          }
        }}>
          <h2 className="note-card-title">{this.props.note.title}</h2>
        </Link>
        <p className="note-card-text">{this.props.note.textBody.length > 100 ? this.props.note.textBody.slice(0, 101) + ' ...' : this.props.note.textBody }</p>
      </div>
    )
  }
}

export default withRouter(connect(null, { deleteNote })(ListItem));