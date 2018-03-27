import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class Note extends Component{
  render(){
    let style={
      color:'black',
      fontFamily:'Raleway',
    }
    return(

          <Panel className="notePanel">
            <Panel.Title style={style} className="title">{this.props.title}</Panel.Title>
            <Panel.Body style={style} className="content">{this.props.text}</Panel.Body>
          </Panel>
    );
  }
}

export default Note;
