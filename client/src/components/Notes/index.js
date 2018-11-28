import React, { Component } from 'react';
import Note from './Note/index';
import { getAllNotes } from '../actions/index';
import { connect } from 'react-redux';

const styles = {
  display: 'flex',
  margin: '100px auto 0px auto',
  width: '90vw',
  maxWidth: '1400px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  border: '1px solid black'
}

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllNotes()
  }

  render() {

    const notes = [...this.props.notes];

    return (
      <div style={styles}>
        {notes.map( (note, i) => <Note key={i} title={note.title} text={note.textBody}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    notes: state.notes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getAllNotes: () => {
      dispatch(getAllNotes())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
