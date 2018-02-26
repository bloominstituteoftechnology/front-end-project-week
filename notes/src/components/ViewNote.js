import React from 'react';
import { connect } from 'react-redux';

class ViewNote extends React.Component {

  render() {
    return (
      <div>
      	<div className="note">
       		<div className="note-title">{this.props.note.title}</div>
       		<div className="note-content">{this.props.note.content}</div>
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