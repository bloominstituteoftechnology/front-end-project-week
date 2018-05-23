import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

class NoteView extends Component {
  findNote () {
  }
  render() {
    const id = this.props.match.params.id;
    const note = this.props.notes.filter(note => note.id == id)[0];
    const content = note.content.split('\n').map( (paragraph, index) => <p key={index} >{paragraph}</p> )
    console.log(content);
    return (
      <React.Fragment>
      <div className="d-flex position-absolute edition" >
        <div>delete</div>
        <div>edit</div>
      </div>
      <h5 className="text-capitalize">{note.title}</h5>
      <div className="" >
        {content}
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.data
  }
}
export default withRouter(connect(mapStateToProps, {})(NoteView));