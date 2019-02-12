import React, { Component } from 'react';
import {  NoteContainer, ViewCard} from '../../style/style';
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
      return item._id === myId
    });
    this.setState({ note: note });
  }

  goto = () =>{
    this.props.history.push('/')
  }

 

  render() {
    return ( 
      <NoteContainer >
        <ViewCard>
        <div className='note-actions'>
        <Button color="link" onClick={this.goto}>Back</Button>
        <Button color="link" onClick={this.props.edit}>Edit</Button>
        <Button color="link" onClick={this.props.delete}>Delete</Button>
        </div>
        {this.state.note.map(item =>{
          return[
            <h1 className="title">{item.title}</h1>,
            <p className="content">{item.textBody}</p>
          ]
        })}
        </ViewCard>
      </NoteContainer>
    );
  }
}

 
export default NoteView;