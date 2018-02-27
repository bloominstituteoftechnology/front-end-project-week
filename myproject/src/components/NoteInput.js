import React from 'react';




export default class NoteInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }  

  addNote(Note) {
    if (Note.length > 0) { 
    this.props.addNote(Note);
    this.setState({value: ''});
  }
  }

render () {
  return (
    <div>
      <input type="text" value={this.state.value} onChange={this.handleChange} /> 
      <button className="btn btn-primary" onClick={()=> this.addNote(this.state.value)}>Submit
      </button>
</div> 
  );    
  }
}