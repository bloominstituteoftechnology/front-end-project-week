import React, { Component } from 'react';

class EditNote extends Component {
  constructor(){
    super()
    this.title = React.createRef()
    this.textBody = React.createRef()
  }

  render() {
    return (
      <div>
        <h1> Edit New Note:</h1>
        <div>
          <input ref={this.title} type="text" defaultValue={this.props.title}/>
        </div>
        <div>
          <textarea ref={this.textBody} defaultValue={this.props.textBody}/>
        </div>
        <div>
          <button onClick={() => this.props.editNote(this.props.id,this.title.current.value, this.textBody.current.value)}> Save </button>
        </div>
      </div>
    );
  }
}

export default EditNote;