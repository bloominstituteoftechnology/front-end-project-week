import React, { Component } from "react";
import NoteCard from "./NoteCard";
import axios from "axios";

import styled from 'styled-components';

const NoteView = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: space-between;
align-items: none;
flex-direction: column;


`; 
const Title = styled.div`
font-size: 20px;
padding: 20px;
width: 100%;
text-align: left;

`; 



class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }
  render() {
    return (
      <div className ="notes">
      <Title>Your Notes:</Title>
        <NoteView>
        
        {this.state.notes.length < 1 ? (
          <h3>There are no notes!</h3>
        ) : (
          this.state.notes.map(note => <NoteCard key={note._id} note={note} />)
        )}
      </NoteView>
      </div>
    );
  }
}

export default NoteList;
