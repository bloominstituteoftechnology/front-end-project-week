import React, { Component } from 'react';
import {  NoteContainer} from '../../style/style';
import { Button } from 'reactstrap';

class NoteView extends Component {
  constructor(props){
    super(props);
    this.state={
      note:[]
    }
  }

  componentDidMount(){
    let myId = this.props.match.params.id;
    const notes = this.props.notes
    const note  = notes.filter(item => {
      return item.id === Number(myId);
    });
    this.setState({ note: note });
  }

  render() {
    console.log(this.state.note )
    return ( 
      <NoteContainer >
        <div className='note-actions'>
        <Button color="link">Edit</Button>
        <Button color="link">Delete</Button>
        </div>
        <div className="note-wrapper">
         {this.state.note.map(item =>{
           return[
             <h1>{item.title}</h1>,
             <p>{item.content}</p>
           ]
         })}
        </div>
      </NoteContainer>
    );
  }
}

 
export default NoteView;