import React from 'react';

// Auxillary Packages
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteNote } from '../actions';

// Purgatorial Packages
import {Link} from 'react-router-dom';

// CSS
import '../CSS/ListItem.css';

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
          <h2 style={{whiteSpace: 'pre-line'}} className="note-card-title">
          {this.props.note.textBody.length > 15 ? this.props.note.textBody.slice(0, 16) + ' ...' : this.props.note.textBody }
          </h2>
        </Link>
        <p style={{whiteSpace: 'pre-line'}} className="note-card-text">{this.props.note.textBody.length > 100 ? this.props.note.textBody.slice(0, 50) + ' ...' : this.props.note.textBody }</p>
      </div>
    )
  }
}

export default withRouter(connect(null, { deleteNote })(ListItem));