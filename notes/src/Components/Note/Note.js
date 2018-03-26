import React, {Component} from 'react';
import {Panel,Grid,Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
