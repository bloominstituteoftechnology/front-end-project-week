import React from 'react';
import Note from './Note';
import {fetchNotes} from '../actions/index';
import {withRouter} from 'react-router-dom';
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
                return <Note {...note} key = {note.id} />   
            })}

        </div>
        </div>
    )
}
}

const mapStateToProps = () => {
    return {
        
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
      fetchNotes
  })(NoteList));