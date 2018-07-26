import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/notesActions'

class DeleteModal extends React.Component  {
  deleteHandler = () => {
    console.log('bye');
    this.props.deleteNote(parseInt(this.props.match.params.id, 10));
    this.props.history.push('/');
    console.log(this.props);
  }
  render(){
    console.log('delete', this.props)
    return ( 
      <div>
        <p>Are you sure you want to delete this?</p>
        <button onClick={this.deleteHandler}>Delete</button>
        <button>No</button>
      </div>
     );
  }
  
}
 
export default connect(null, {deleteNote})(DeleteModal);

