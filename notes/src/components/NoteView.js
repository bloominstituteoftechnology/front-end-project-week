import React, { Component } from "react";
import axios from 'axios';

import { NoteCardTitle, NoteCardText, NoteViewLinks } from "./Styled";

class NoteView extends Component {
  constructor() {
    super()
    this.state={
      title: '',
      textBody: ''
    }
  }
  

  componentDidMount() {
    console.log(this.props, 'check params')
    axios.get( `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
    .then(res => {
      console.log(res, 'check res')
      this.setState({textBody: res.data.textBody, title: res.data.title})
    })
      .catch(err =>console.log(err))
  
  }
  render() {
    return (
      <div>
        <NoteViewLinks>
          <div>edit</div>
          <div>delete</div>
        </NoteViewLinks>

        <NoteCardTitle>{this.state.title}</NoteCardTitle>
        <NoteCardText>{this.state.textBody}</NoteCardText>
      </div>
    );
  }
}


export default NoteView;
