import React, { Component } from "react";
import NoteCard from "./NoteCard";
import axios from "axios";

import styled from 'styled-components';

const NoteView = styled.div`
display: flex;
justify-content: space-evenly;
align-items: none;
flex-direction: row-reverse;
width: 100%;
margin-top: 16px;
flex-wrap: wrap;

`; 
const Title = styled.div`
font-size: 20px;
padding: 20px;
width: 100%;
text-align: left;
color: #4A4A4A;
text-align: left;
font-size: 20px;
line-height: 30px;
font-family: 'Helvetica', 'Arial', sans-serif;
font-weight: bolder;
margin-top: 30px;
`; 

const Card = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: space-between;
align-items: none;
flex-direction: column;
background-color: #fff;
width: 380px;
margin: 40px;
padding: 24px;

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
          <div>No Notes</div>
        ) : (
          this.state.notes.map(note => <NoteCard key={note._id} note={note} />)
        )}
      </NoteView>
      </div>
    );
  }
}

export default NoteList;
