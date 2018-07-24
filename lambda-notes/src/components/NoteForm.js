import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      textBody: '',
     }
  }
  onSubmit = (e) => {
    e.prevevtDefault();
    this.props.onSubmit(this.state);
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ title });
  }
  onTextBodyChange = (e) => {
    const textBody = e.target.value;
    this.setState({ textBody });
  }
  render() { 
    return ( 
      <div>
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea 
            placeholder="Note Content"
            value={this.state.textBody}
            onChange={this.onTextBodyChange}
            id="" cols="30" rows="10"
           >
          </textarea>
          <button>Add Note</button>
        </form>
      </div> );
  }
}
 
export default NoteForm;