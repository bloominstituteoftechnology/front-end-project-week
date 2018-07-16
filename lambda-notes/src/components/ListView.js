import React, { Component } from 'react';

class ListView extends Component {
  render() {
    return (
      <div>
        {this.props.notes.map ( note => <h2 key={Math.random()}>{note.title}</h2>) }
      </div>
    );
  }
}

export default ListView;