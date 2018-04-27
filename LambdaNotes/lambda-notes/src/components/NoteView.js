// REACT COMPONENTS
import React, { Component } from 'react';

// STYLING COMPONENTS
import '../Styles.css';

// ROUTER COMPONENTS
import { Link } from 'react-router-dom'

// REDUX COMPONENTS
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

class NoteView extends Component {
  constructor (props){
    super(props)
    this.state={
      notes: props.notes,
    }

    this.deleteNote = () => {
      if(window.confirm("Do you want to delete this note?")){
        this.props.deleteNote(this.props.match.params.id);
        props.history.push('/');
      }
    }
  }

  render() {
    return (
      <div className="APP__NOTEVIEW">
        {this.state.notes.map((note, index) => {
          if(index === parseInt(this.props.match.params.id, 10)){
            return(
              <div key={`note${index}`}>
                <div className="APP__NOTE-HEADER">
                  <Link to={`/edit/${index}`} style={{ textDecoration: 'none', color: 'black' }}>edit</Link>
                  <p className="APP__NOTE-DELETE" onClick={() => {this.deleteNote(index)}}>delete</p>
                </div>
                <ThisNote note={note} />
              </div>
            );
          };
          return null;
        })}
      </div>
    );
  };
};

function ThisNote(props) {
  const { title, text } = props.note;
  return (
    <div className="APP__NOTE-FULL">
      <h5 className="APP__NOTE-TITLE">{title}</h5>
      <p className="APP__NOTE-TEXT">{text}</p>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {deleteNote})(NoteView);

