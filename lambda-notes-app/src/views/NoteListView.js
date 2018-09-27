import React from 'react';
import { connect } from 'react-redux';
import { NotesList } from '../components/NotesList/NotesList';
import { fetchNotes } from '../store/actions';

class NoteListView extends React.Component {
  state = {
    notesArray: []
  }

  componentDidMount() {
    console.log('in comp did mount');
    this.props.fetchNotes();
  }

  componentDidUpdate(prevProps) {
    // if (JSON.stringify(this.props.notesList) !== JSON.stringify(prevProps.notesList) ) {
    if (this.props.notesList !== prevProps.notesList ) {
      console.log('prev props', prevProps);
      this.setState({ notesArray: this.props.notesList })   
      console.log('inside update')
    }
  }

  render() {
    console.log('notesArray, thats me!', this.state.notesArray);
    return this.state.notesArray.length > 0 ? <NotesList {...this.props} notes={this.state.notesArray} /> : <div>loading....</div> ;
  }
}

const mapStateToProps = state => {  
  console.log('looping still?');
  return {
    notesList: state.notes // notesList is defined from our props.notesList.map inside our component
  }  
}

export default connect(mapStateToProps, { fetchNotes })(NoteListView);