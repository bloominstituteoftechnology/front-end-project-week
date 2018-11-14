import React, { Component } from 'react';
import styled from 'styled-components'

const ListWrapper = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #F3F3F3;
    color: #4A4A4A;
`

const NotesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap; 
`

const Note = styled.div`
    width: 30%;
    height: 225px;
    background-color: white;
    border: 1px solid darkgrey;
    overflow: hidden;

    h2 {
        width: 90%;
        border-bottom: 1px solid darkgrey;
        margin: 0px auto;
        padding: 10px;
    }

    p {
        margin: 0px auto;
        padding: 20px;
    }
`

class List extends Component {


  render() {
    return (
      <ListWrapper>
          <h1>Your Notes:</h1>
        <NotesWrapper>
       {this.props.notes.map(note => {
           return (
               <Note key={note._id}>
                   <h2>{note.title}</h2>
                   <p>{note.textBody}</p>
                </Note>
           )
       })}
       </NotesWrapper>
      </ListWrapper>
    );
  }
}

export default List;