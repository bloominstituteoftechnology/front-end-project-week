import React, { Component } from 'react';
import './NoteList.css';
import {connect} from 'react-redux';
import {loadNotes} from '../actions';
import { Link } from 'react-router-dom';

class NoteList extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        this.props.loadNotes();
    }

render() {
    return (
      <div className='NoteList'>
        <h1 className= 'yourNotes'>Your Notes:</h1>
        {this.props.fetching ? (
          <div>Loading Notes</div>
        ) : (
          <ul className='Notes'>
            {this.props.notes.map((note, id) => {
              return (
                <div key={note.id}>
                <Link className = 'noteLink' to={`/note/${note.id}` }>
                  <div className='NoteId'>
                    <div className='noteTitle'>{note.title}</div>
                    <div className='noteBody'>{note.body}</div>
                  </div>
                  </Link>
                </div>
              );
            })}
          </ul>
        )}        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    loading: state.loadNotes,
    error: state.error
  };
};

export default connect ( mapStateToProps, { loadNotes }) (NoteList);