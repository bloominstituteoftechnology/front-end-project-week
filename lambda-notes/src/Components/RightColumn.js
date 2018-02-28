import React, { Component } from 'react';
import Notes from './Notes';

class RightColumn extends Component {
  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    this.setState({notes: [
        {
          id: 0,
          title: 'Note Title',
          description: 'Text overflow can only happen on block or inline-block level elements, because the element   needs to have a width in order to be overflow-ed. The overflow happens in the direction as determined by the         direction property or related attributes.'
        },
        {
          id: 1,
          title: 'Note Title',
          description: 'I am the second note'
        },
        {
          id: 2,
          title: 'Note Title',
          description: 'I am the third note'
        },
        {
          id: 3,
          title: 'Note Title',
          description: 'I am the fourth note'
        },
        {
          id: 4,
          title: 'Note Title',
          description: 'I am the fifth note'
        },
        {
          id: 5,
          title: 'Note Title',
          description: 'I am the third note'
        },
        {
          id: 6,
          title: 'Note Title',
          description: 'I am the fourth note'
        },
        {
          id: 7,
          title: 'Note Title',
          description: 'I am the fifth note'
        },
        {
          id: 8,
          title: 'Note Title',
          description: 'I am the fifth note'
        },
        {
          id: 9,
          title: 'Note Title',
          description: 'I am the fifth note'
        }
    ]});
  }
  render() {
    return(
      <div className='right-column'>
        <h2>Your Notes:</h2>
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default RightColumn;
