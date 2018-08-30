import React from 'react';
import List from './List';
import Create from './Create';
import { Route } from 'react-router-dom';
import Note from './Note';
import Delete from './Delete';
import axios from 'axios';

class ListContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        displayDelete: false,
        list: [
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna1',
            id: 0,
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna2',
            id: 1,
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna3',
            id: 2,
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna4',
            id: 3,
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna5',
            id: 4,
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna6',
            id: 5,
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna7',
            id: 6,
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna8',
            id: 7,
            completed: false
          },
          {
            title: 'Note Title',
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
      console.log(list);
      list.push({ title: this.state.title, content: this.state.content, id: this.currentId + 1, completed: false });
      console.log(list);
      this.setState({ list: list });
    }

    fetchNote = id => {
      const filterNote = this.state.list.filter(note => note.id === id);
        return filterNote[0];
    }

    updateNoteHandler = () => {
      axios.put()
    }

    deleteNoteHandler = (id) => {
      axios.delete(`${this.state.list.filter(note => note.id === id)}`)
        .then(response => {
          console.log(response);
        });
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
          <Route path="/Note/:id" render={(props) => 
            <Note {...props} 
              fetchNote={this.fetchNote} 
              deleteNoteHandler={this.deleteNoteHandler}
              showModal={this.showModal}
            />
          } />
        </div>
        
      );
    } 
  }
  
  export default ListContainer;