import React, { Component } from 'react';
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes:[]
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState(()=> ({id:Number(id), notes:this.props.notes}))
  }
  filterNotes = note => {
    if(this.state.id === note.id) {
      return (
        <div>
          <h2>{note.title}</h2>
          <p>{note.textBody}</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <p>edit</p>
        <p>delete</p>
        <div>
          {this.props.notes.map(this.filterNotes)}
        </div>
      </div>
    )
  }
}

export default Note;
