import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import EditForm from './EditForm';
import axios from 'axios';

//EDIT IS HERE!!
//DELETE IS HERE!!

class NoteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: {},
      title: '',
      textBody:'',
      isDeleting: false,
      isEditing: false,
    }
  }
  
  componentDidMount(){
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  //GET NOTE BEGINS
  getNote = (id) => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState(() => ({ note: response.data }))
      })
      .catch(error => {
        console.log(error);
      })
  }
  //GET NOTE ENDS



  //DELETE STARTS
  toggleDeleting = () => {
    this.setState({isDeleting : !this.state.isDeleting})
  }

  deleteNote = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log('DELETE', response)
        this.setState({ note: response.data })
      })
      .catch( error => { console.log(error) })
  }
  //DELETE ENDS

  //what is this for?
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchNote(newProps.match.params.id);
    }
  }


  render() {
      if(!this.state.note) {
        return (
        <div>
          <h2>Loading...</h2>
        </div>
        )
      }

      return (
        <div className='singleNote'>
          <div>{this.state.note.title}</div>
          <div>{this.state.note.textBody}</div>

          <button><Link to={`/edit/${this.state.note._id}`}>
            edit
          </Link></button>

          <button>
          </button>

          <button onClick={this.deleteNote 
            //changes deleting to true
            //once true, render deletemodal
          }>delete</button>
        </div>
      )
  }
}

export default NoteCard;