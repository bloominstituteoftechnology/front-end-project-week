import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';

const mapStateToProps = state => {
  return {
    notesArray: state
  }
}

class NoteList extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  componentWillMount() {
    let reversedOrder = Array.from(this.props.notesArray).reverse();
    this.setState({ notesArray: reversedOrder });
  }

  selectedNote = (note, index) => {
    return (
      <div className='note' key={note._id}>
        <Link to={`/note/${note._id}`}>        
          <h3 className='note-header'>{note.title}</h3>
        </Link>
        <hr />
        <p>{note.body}</p>
      </div>      
    )
  }

  render() {
    // console.log('Props from reducers', this.props)
    return (
      <div className='notelist-container'>
        <div className='content-header'><h2>Your Notes:</h2></div>
        <div className='noteList'>
          {this.props.notesArray.map(this.selectedNote)}          
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, {/*action here if needed*/})(NoteList);
