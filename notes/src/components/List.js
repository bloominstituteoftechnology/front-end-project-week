import React from 'react';
import { connect } from 'react-redux';
import ViewNote from './ViewNote';
import { Link } from 'react-router-dom';

class List extends React.Component {

  render() {
    return (
      <div className='list'>
      	{this.props.notes.map((note) => {
      		return (
            <Link key={note.id} to={{ pathname: `/notes/${note.id}`, note: note}}>
              <div>
                <div>{note.title}</div>
                <div>{note.content}</div>
              </div>
            </Link>
          );
      	})}
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