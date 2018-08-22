import React from 'react';
import List from './List';
import Create from './Create';
import { Route } from 'react-router-dom';
import Note from './Note';

class ListContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        list: [
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna1',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna2',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna3',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna4',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna5',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna6',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna7',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna8',
            id: Date.now(),
            completed: false
          },
          {
            title: 'Note Title',
            content: 'enim tortor at auctor urna9',
            id: Date.now(),
            completed: false
          }
        ],
        title: '',
        content: ''
      };
    }
   
    handleTaskChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleAddNoteSubmit = e => {
      e.preventDefault();
      const list = this.state.list.slice();
      console.log(list);
      list.push({ title: this.state.title, content: this.state.content, id: Date.now(), completed: false });
      console.log(list);
      this.setState({ list: list });
    }

    render() {
      return (
        <div>
          <h3>Your Notes:</h3>
          <Route exact path="/" render={(props) => <List {...props} list={this.state.list}/>} />
          <Route path="/Create" render={(props) => 
            <Create {...props} 
              handleAddNoteSubmit={this.handleAddNoteSubmit} 
              handleTaskChange={this.handleTaskChange} 
              title={this.state.title} 
              content={this.state.content}
            />
          } />
          <Route path="/Note" component={Note} />
        </div>
        
      );
    }
  }
  
  export default ListContainer;