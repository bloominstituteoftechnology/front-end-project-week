import React from 'react';
import { connect } from 'react-redux';

class ViewNote extends React.Component {

  render() {
    if(!this.props.location.note){
      this.props.history.push('/');
      return null;
    }
    return (
      <div>
      	<div className="note">
          <div>Edit</div>
          <div>Delete</div>
       		<div className="note-title">{this.props.location.note.title}</div>
       		<div className="note-content">{this.props.location.note.content}</div>
       	</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  } 
}

export default connect(mapStateToProps)(ViewNote);