import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class Note extends Component{
  render(){
    return(
          <Panel className="notePanel">
            <Panel.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida neque pulvinar elit semper  Suspendisse rutrum velit ...</Panel.Body>
          </Panel>
    );
  }
}

export default Note;
