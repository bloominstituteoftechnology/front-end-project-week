import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class Note extends Component{
  render(){
    return(
          <Panel className="notePanel">
            <Panel.Title>{this.props.title}</Panel.Title>
            <Panel.Body>{this.props.text}</Panel.Body>
          </Panel>
    );
  }
}

export default Note;
