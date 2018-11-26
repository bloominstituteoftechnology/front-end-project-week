import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';




const ListWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
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
    

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6; 
        line-height: 1.2em;       
        max-height: 7.2em;
        margin: 10px;
        height: 1fr;
        clear: both;
        padding: 5px;     
     }
    }
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    align-items: center;
    padding: 0 10px;

a {
    color: #4A4A4A;
    text-decoration: none;
}

button {
    height: 20px;
    width: 20px;
    background-color: #2BC1C4;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
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

      deletenote(id) {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .catch(function(error) {
          console.log(error);
        });
        this.componentDidMount();
    }

    componentDidUpdate() {
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
               <HeaderWrapper>
               <Link to={{
                pathname: `/${note._id}`,
                title: `${note.title}`,
                textBody: `${note.textBody}`,
                id: `${note._id}`
            }}>
                  <h2>{note.title}</h2></Link>
                  <button onClick={() => this.deletenote(note._id)}>X</button>
                  </HeaderWrapper>
                  <p>{note.textBody}</p>
              </Note>
           )
       })}
       </NotesWrapper>
      </ListWrapper>
    );
  }
};





export default List;