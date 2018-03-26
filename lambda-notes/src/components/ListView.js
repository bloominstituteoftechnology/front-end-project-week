import React, { Component } from 'react';

import notes from './Notes';

class ListView extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    
    return (
      <div>
        {notes.map(note => {
          return <note.title />
        })}
      </div>
    )
    
  }
}

export default ListView;