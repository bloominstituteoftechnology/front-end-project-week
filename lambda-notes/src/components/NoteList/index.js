// Dependencies
import React, { Component, Fragment } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
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

  componentDidMount() {
    console.log("Does this.props.user exist?",this.props.user ? "YES":"NO");
    if (this.props.user) this.props.fetchNotes(this.props.user.uid);
  }

  displayNotes = () => {
    return (
      <Fragment>
        <h4>Your Notes:</h4>
        <div className={`note-view d-flex flex-wrap`}>
          { this.props.notes.map(obj => <NoteCard key={obj.id} {...obj} />)}
        </div>
      </Fragment>
    );
  }

  render() {
    console.log("NoteList props.notes",this.props.notes);
    console.log("Notelist props.user.",this.props.user);
    if (!this.props.user) return <Redirect to ="/" />;
    const { classes } = this.props;
    return (
      <div className={`note-list ${classes}`}>
      { this.displayNotes() }
      </div>
    );
  }
}

const NoteCard = (props) => {
  const { id, title, text } = props;
  const truncTitle = title.length > 12 ? title.substring(0,10) + '...' : title;
  const truncText = text.length > 82 ? text.substring(0,80) + '...' : text;
  return (
    <Link to={`/notes/${id}`} className="note-card">
      <h3 style={{color:'var(--color-bg--button-main)'}}>{truncTitle}</h3>
      <hr style={{borderColor:'var(--color--main)'}} />
      <p>{truncText}</p>
      {/* <ReactMarkdown source={truncText} /> */}
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notesReducer.notes,
    user: state.userReducer.user,
  }
}

export default withRouter(connect(mapStateToProps, { fetchNotes })(NoteList));