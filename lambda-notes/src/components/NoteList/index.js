// Dependencies
import React, { Component, Fragment } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
// CSS
import './NoteList.css';
// Components
import connect from 'react-redux/lib/connect/connect';
import { fetchNotes } from '../Actions';
import { Tag } from '../Forms/ViewNote';

class NoteList extends Component {

  componentDidMount() {
    console.log("Does this.props.user exist?",this.props.user ? "YES":"NO");
    if (this.props.user) this.props.fetchNotes(this.props.user.uid);
  }

  render() {
    console.log(this.props.match? this.props.match : "undefined");
    const { classes } = this.props;

    // If you're not logged in, you can't be here.
    if (!this.props.user) return <Redirect to ="/" />;

    // If you don't have any notes, let's make some!
    if (this.props.notes.length === 0) {
      return (
        <div className={`note-list ${classes}`}>
          <h3>You don't have any notes.</h3>
          <p>Let's get started by clicking on "Create New Note"!</p>
        </div>
      );
    }
    
    // Note list
    const path = this.props.match.path;
    const tag = this.props.match.params.tag;
    return (
      <div className={`note-list ${classes}`}>
      {
        path === "/notes/tag/:tag" ?
          <h4>Notes with <Tag>{tag}</Tag></h4>
        :
          <h4>Your Notes:</h4>
      }
        <div className={`note-view d-flex flex-wrap`}>
          { 
            path === "/notes/tag/:tag" ?
              this.props.notes.filter(obj => obj.tags.includes(tag))
                .map(obj => <NoteCard key={obj.id} {...obj} />)
            :
              this.props.notes.map(obj => <NoteCard key={obj.id} {...obj} />)
          }
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