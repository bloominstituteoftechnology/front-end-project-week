// Dependencies
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
// CSS
import './NoteList.css';
// Components
import connect from 'react-redux/lib/connect/connect';
import { fetchNotes } from '../Actions';

class NoteList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.fetchNotes();
  }

  render() {
    console.log("NoteList props.notes",this.props.notes)
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
  const truncTitle = title.length > 12 ? title.substring(0,10) + '...' : title;
  const truncText = text.length > 82 ? text.substring(0,80) + '...' : text;
  return (
    <Link to={`/note/${id}`} className="note-card">
      <h3>{truncTitle}</h3>
      <hr />
      <p>{truncText}</p>
      {/* <ReactMarkdown source={truncText} /> */}
    </Link>
  );
}

const mapDispatchToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default withRouter(connect(mapDispatchToProps, { fetchNotes })(NoteList));