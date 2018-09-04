import React from 'react';
import List from './List';
import Create from './Create';
import { Route } from 'react-router-dom';
import Note from './Note';
import Edit from './Edit';
import axios from 'axios';

class ListContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        displayDelete: false,
        list: [
          {
            title: 'Note 1',
            content: 'enim tortor at auctor urna1',
            id: 0,
            completed: false
          },
          {
            title: 'Note 2',
            content: 'enim tortor at auctor urna2',
            id: 1,
            completed: false
          },
          {
            title: 'Note 3',
            content: 'enim tortor at auctor urna3',
            id: 2,
            completed: false
          },
          {
            title: 'Note 4',
            content: 'enim tortor at auctor urna4',
            id: 3,
            completed: false
          },
          {
            title: 'Note 5',
            content: 'enim tortor at auctor urna5',
            id: 4,
            completed: false
          },
          {
            title: 'Note 6',
            content: 'enim tortor at auctor urna6',
            id: 5,
            completed: false
          },
          {
            title: 'Note 7',
            content: 'enim tortor at auctor urna7',
            id: 6,
            completed: false
          },
          {
            title: 'Note 8',
            content: 'enim tortor at auctor urna8',
            id: 7,
            completed: false
          },
          {
            title: 'Note 9',
            content: 'enim tortor at auctor urna9',
            id: 8,
            completed: false
          }
        ],
        title: '',
        content: '',
        
      };
      this.currentId = Math.max(...this.state.list.map(note => note.id))
    }

    handleTaskChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleAddNoteSubmit = e => {
      e.preventDefault();
      const list = this.state.list.slice();
      list.push({ title: this.state.title, content: this.state.content, id: this.currentId + 1, completed: false });
      this.setState({ list: list });
    }

    fetchNote = id => {
      const filterNote = this.state.list.filter(note => note.id === id); //delete is reverse of this, use !==
        return filterNote[0];
    }

    updateNoteHandler = e => {
      e.preventDefault();
      const list = this.state.list.slice();
      list.splice({id: this.currentId}, 1, { title: this.state.title, content: this.state.content, id: this.currentId + 1, completed: false });
      this.setState({ list: list });
    }

    deleteNoteHandler = id => {
      const deleteNote = this.state.list.filter(note => note.id !== id); 
        return deleteNote;
    }

    showModal = () => {
      this.setState({ displayDelete: !this.state.displayDelete })
    }

    render() {
      return (
        <div>
          <Route exact path="/" render={(props) => <List {...props} list={this.state.list}/>} />
          <Route path="/Create" render={(props) => 
            <Create {...props} 
              handleAddNoteSubmit={this.handleAddNoteSubmit} 
              handleTaskChange={this.handleTaskChange} 
              title={this.state.title} 
              content={this.state.content}
            />
          } />
          <Route path="/Edit" render={(props) => 
            <Edit {...props} 
              updateNoteHandler={this.updateNoteHandler}
              handleTaskChange={this.handleTaskChange} 
              title={this.state.title} 
              content={this.state.content}
            />
          } />
          <Route path="/Note/:id" render={(props) => 
            <Note {...props} 
              fetchNote={this.fetchNote} 
              showModal={this.showModal}
              deleteNoteHandler={this.deleteNoteHandler}
            />
          } />
        </div>
        
      );
    } 
  }
  
  export default ListContainer;