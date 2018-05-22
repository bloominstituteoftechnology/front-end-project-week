// Dependencies
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// CSS
import './NoteList.css';
import connect from 'react-redux/lib/connect/connect';

class NoteList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { classes } = this.props;
    return (
      <div className={`note-list ${classes}`}>
        <h4>Your Notes:</h4>
        <div className={`note-view d-flex flex-wrap`}>
          { this.props.notes.map(obj => <NoteCard key={obj.id} {...obj} />)}
        </div>
      </div>
    );
  }
}

const NoteCard = (props) => {
  const { id, title, text } = props;
  const truncTitle = title.length > 13 ? title.substring(0,10) + '...' : title;
  const truncText = text.substring(0,80) + '...';
  return (
    <Link to={`/note/${id}`} className="note-card">
      <h3>{title}</h3>
      <hr />
      <p>{truncText}</p>
    </Link>
  );
}

const mapDispatchToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default withRouter(connect(mapDispatchToProps, null)(NoteList));