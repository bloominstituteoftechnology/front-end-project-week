import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showWholeNote } from '../actions';

class ListView extends Component {
  // constructor() {
  //   super();
  //   this.state = {}
  // }
  // 
  render() {
    
    return (
      <div>
        {this.props.notes.map((note, i) => {
          return <div>{note.title}</div>
        })}
      </div>
    )
    
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { showWholeNote })(ListView);