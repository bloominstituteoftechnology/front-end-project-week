import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotes } from '../../actions';


class NotesContainer extends Component {

    // componentDidMount() {
    //     this.props.fetchNotes();
    // }
  
 render() {
     console.log(this.props)
     return (
         <div>
        {this.props.notes.map(note => { return <div>{note.title}</div>})}
        </div>
     )
 }
}


const mapStateToProps = state => {
    
    return {
        notes: state.notes
    }
   
}

export default connect(mapStateToProps, { fetchNotes })(NotesContainer);