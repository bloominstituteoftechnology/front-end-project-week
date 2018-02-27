import React from 'react';
import { connect } from 'react-redux';
import ViewNote from './ViewNote';
import { Link } from 'react-router-dom';

class List extends React.Component {

  render() {
    return (
      <div>
        <div className="your-note">Your Notes:</div>
        <div className='list'>
        	{this.props.notes.map((note) => {
        		return (
              <Link key={note.id} to={{ pathname: `/notes/${note.id}`, note: note}}>
                <div className='notes'>
                  <div className="notes-title">{note.title}</div>
                  <div class="note-line"></div>
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
  return {
  	notes: state.notes.notes
  } 
}

export default connect(mapStateToProps)(List);