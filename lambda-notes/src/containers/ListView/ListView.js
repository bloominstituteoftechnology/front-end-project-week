import React, {
  Component
} from 'react';

class ListView extends Component {
  constructor() {
    super()
    this.state = [{
        noteTitle: 'First Note',
        message: 'Message goes here',
      },
      {
        noteTitle: 'Second Note',
        message: 'Message goes here',
      },
    ];
  }

  render() {
    return (
      <ListView state={this.state}/>
    );
  }
}

export default ListView;