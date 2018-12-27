import React, { Component } from 'react';
import axios from 'axios';

//import EditNote from './EditNote';

//import NoteCard from './NoteCard';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: [],
      id: null,
    };   
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.setState({ id, notes: this.props.notes });

    axios
    .get(`http://localhost:3333/api/notes/${id}`)
    .then(response => {
      this.setState(() => ({ note: response.data }));
    })
    .catch(error => {
      console.error("Error getting notes data.", error);
    });

  }

/*   fetchNote = note => {
    if (note._id === this.state.id) {
      return (
        <div>
          <p>{note.title}</p>
          <p>{note.contents}</p>
          <button onClick={e => {
            this.deleteNote(e, note.id);
          }}>
          Delete Note
          </button> 
        </div>
      );
    }
  }; */

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  editNote = (e, id) => {
    const updatedNote = {
      title: this.state.title,
      contents: this.state.contents
    }

  axios
  .put(`http://localhost:3333/api/notes/${id}`, updatedNote)
  .then(response => {
      return this.setState({note: updatedNote})
  })
};

  deleteNote = (e, id) => {
    e.preventDefault();
  
    axios
      .delete(`http://localhost:3333/api/notes/${id}`)
      .then(response => {
        this.setState({notes: response.data})
        this.props.history.push('/');
      })
      .catch(error => {
        console.error("Failed to delete note.", error);
      })
  }

  render(id) {
return (
  <div>
    {this.state.note.map(note => {
     return  <div>

        <p>{note.title}</p>  
        <p>{note.contents}</p>

        <form>
                <h1>Edit Note:</h1>
                <input 
                    onChange={this.handleInputChange}
                    placeholder='title'
                    value={this.state.title}
                    name='title'
                />
                <input 
                    onChange={this.handleInputChange}
                    placeholder='contents'
                    value={this.state.contents}
                    name='contents'
                />
                <button onClick={e => {
                  this.editNote(e, note.id);
                  }}>
                  Save
                </button>
            </form>

        {/* <EditNote id={note.id}/> */}

        <button onClick={e => {
          this.deleteNote(e, note.id);
          }}>
          Delete Note
        </button> 

        </div> 
    })}

   </div>
)}
}
export default Note;