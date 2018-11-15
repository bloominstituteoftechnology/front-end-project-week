import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'


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
    margin: 10px;
    

    h2 {
        width: 90%;
        border-bottom: 1px solid darkgrey;
        margin: 0px auto;
        padding: 10px;
    }

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6; 
        line-height: 1.2em;       
        max-height: 7.2em;
        margin: 10px;      
     }
    }
`

class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          notes: []
        }
      }

      componentDidMount() {
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
          .then(res => {
            const notes = res.data;
            this.setState({ notes });
          })
          .catch(function (error) {
            console.log(error);
          });
      }

  render() {
    return (
      <ListWrapper>
          <h1>Your Notes:</h1>
        <NotesWrapper>
       {this.state.notes.map(note => {
           return (
               <Note key={note._id}>
                   <h2 onClick>{note.title}</h2>
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