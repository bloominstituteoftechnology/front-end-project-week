import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/notesActions'

class DeleteModal extends React.Component  {
  deleteHandler = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.history.push('/');
    console.log(this.props);
  }
  goBack = () => {
    this.props.history.push(`/note/${this.props.match.params.id}`);
  }
  render(){
    console.log('delete', this.props)
    return ( 
      <div>
        <p>Are you sure you want to delete this?</p>
        <button onClick={this.deleteHandler}>Delete</button>
        <button onClick={this.goBack}>No</button>
      </div>
     );
  }
  
}
 
export default connect(null, {deleteNote})(DeleteModal);

