import React, { Component } from 'react';

class CreateNote extends Component {
  constructor(props){
    super()
    this.title = React.createRef();
    this.content = React.createRef();
  }

  render() {
    return (
      <div>
        <h1> Create New Note:</h1>
        <div>
          <input ref = {this.title} type="text" placeholder="Note Title"/>
        </div>
        <div>
          <textarea ref = {this.content} placeholder="Note Content"/>
        </div>
        <div>
          <button onClick={() => this.props.saveNewNote(this.title.current.value, this.content.current.value)}> Save </button>
        </div>
      </div>
    );
  }
}

export default CreateNote;