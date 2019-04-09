import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, } from '../actions';
import { Link } from 'react-router-dom'


class Notes extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const fetching = this.props.fetchingData;
    return (
      <div className='listDisplay' >
        <h1>Your notes:</h1>
        {fetching ? (
        <p>Loading...</p>
      ) : (
        <div className='noteDisplay'>
        
        {this.props.notes.map(note => {
          return (
            <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none' }}>
              <div className="notesDisplay" key={note.id}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </div>
            </Link>
          );
        })}
        </div>
      )}
      
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    notes:state.notes,
  };
};

export default connect(mapStateToProps, {
  fetchData,
})(Notes);
