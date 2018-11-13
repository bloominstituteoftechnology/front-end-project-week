import React, { Component } from 'react';
import {  NoteContainer} from '../../style/style';
import { Button } from 'reactstrap';

class NoteView extends Component {
  state = {  }
  render() { 
    return ( 
      <NoteContainer>
        <div className='note-actions'>
        <Button color="link">Edit</Button>
        <Button color="link">Delete</Button>
        </div>
        <div className="note-wrapper">
        <h1>Note Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis lectus. Senectus et netus et malesuada fames ac turpis. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Donec et odio pellentesque diam. Urna molestie at elementum eu. Duis ultricies lacus sed turpis. Netus et malesuada fames ac turpis egestas. Lectus arcu bibendum at varius vel. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Id diam maecenas ultricies mi eget mauris</p>
        </div>
      </NoteContainer>
    );
  }
}

 
export default NoteView;