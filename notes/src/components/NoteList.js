import React from 'react';
import Note from './Note';
import {fetchNotes} from '../actions/index';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';



class NoteList extends React.Component{

    componentDidMount(){
        this.props.fetchNotes();
      }

    render(){

    return (
        <div className = 'note-list-container'>
            <h1>Your Notes:</h1>
        <div className = 'note-list'>
            {this.props.notes.map(note => {
                return <Link to = {`/notes/${note._id}`} key={`${note._id}`}>
                <Note {...note} key = {note._id} />
                </Link>
            })}

        </div>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
      fetchNotes
  })(NoteList));