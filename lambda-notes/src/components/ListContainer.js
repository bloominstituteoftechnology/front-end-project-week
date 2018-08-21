import React from 'react';
import List from './List'

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
        title: ''
      };
    }
   
    render() {
      return (
        <div>
          <h3>Your Notes:</h3>
          <List list={this.state.list} />
        </div>
        
      );
    }
  }
  
  export default ListContainer;