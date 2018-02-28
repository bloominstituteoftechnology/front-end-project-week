import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends React.Component {

  render() {
    return (
      <div className="content">
        <div className="your-note">Your Notes:</div>
        <div className='list'>
        	{this.props.notes.map((note) => {
            return (
              <Link key={note.id} to={{ pathname: `/a/notes/${note.id}`, note: note}}>
                <div className='notes'>
                  <div className="notes-title">{note.title}</div>
                  <div className="note-line"></div>
                  <div className="notes-content">{note.content}</div>
                </div>
              </Link>
            );
        	})}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.notes);
  return {
  	notes: state.notes
  } 
}

export default connect(mapStateToProps)(List);