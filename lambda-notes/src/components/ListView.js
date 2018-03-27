import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinesEllipsis from 'react-lines-ellipsis';
import { Button } from 'reactstrap';

import { showWholeNote } from '../actions';
import './ListView.css';

class ListView extends Component {
  // constructor() {
  //   super();
  //   this.state = {}
  // }
  // 
  render() {
    
    return (
      <div>
        <Button 
          color="success"
          size="large"

        >Press me</Button>
        {this.props.notes.map(note => {
          return( <div key={note.id}>
            <LinesEllipsis
              text={note.text}
              maxLine="1"
              ellipsis="..." 
              basedOn="letters"
            />
          </div> )
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