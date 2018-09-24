import React from 'react';
import '../CSS/ListItem.css';

class ListItem extends React.Component {
  render() {
    return (
      <div className="note-card">
        <h2 className="note-card-title">{this.props.note.title}</h2>
        <p className="note-card-text">{this.props.note.textBody}</p>
      </div>
    )
  }
}

export default ListItem;