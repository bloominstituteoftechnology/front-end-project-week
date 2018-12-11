import React from 'react';
import Modal from './Modal';
import axios from 'axios';
import './SingleNote.css';

const URL = 'http://localhost:5200/api/';



class SingleNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModal: false,
      notes: [],
      note: {
        title: 'Dummy Title',
        content: 'Dummy Content'
      }
    }
  }
 

  showModal = () => {
    this.setState({ deleteModal: true });
  };

  hideModal = () => {
    this.setState({ deleteModal: false });
  };
  
  
  componentDidMount() {
    console.log(this.props)
    const myId = this.props.match.params.id;
    console.log(myId);
    axios
    .get(`${URL}notes/${this.props.match.params.id}`)
    .then(response => {
      console.log(response.data)
      this.setState({ 
        note: {
          title: response.data[0].title,
          content: response.data[0].content
        
      }})})
      .catch(error => {
        console.error('Error collecting notes!', error)
      });
    }
    
    // componentDidMount() {
    //     console.log(myId)
    //     console.log(this.props.notes)
    //     // console.log(this.props.notes)
    //     const foundNote = this.props.notes.find(note => note.id === myId)
    //     console.log(foundNote)
    //     this.setState({
    //         note: foundNote
    //       })
    //       // const myNote = this.props.notes.find((note) =>)
    //     }
        
        deleteConfirmed = (event) => {
          this.props.deleteNote(event, this.state.note.id);
          this.props.history.push('/notes/')
        }
        
        render(){
          return (
            <div className='singleNotePage'>
        <div>
          <div className='editAndDeleteButtons'>
            <h3 
              onClick={event => {
              this.props.editNote(event, this.state.note);
              this.props.history.push('/new_note')}}>
              Edit
            </h3>
            <h3 onClick={this.showModal}>
              Delete
            </h3>
          </div>
          <Modal 
            show={this.state.deleteModal} 
            handleClose={this.hideModal}
            deleteConfirmed={this.deleteConfirmed}>
            <p>Are you sure you want to delete this?</p>
          </Modal>
        </div>
        <h2 className='singleNoteTitle'>{this.state.note.title}</h2>
                   <p>{this.state.note.content}</p> 
      </div>
    )
    //   console.log(this.props)
    //   const cardId = this.props.match.params._id.slice(1)
    //   console.log(cardId)
    //   console.log(this.props.notes)
    //   const note = this.props.notes.find((item) => 
    //     item._id === cardId )
    //   console.log(note)
    //   return (
      //     <div>
      //       <h1>This is a Single Note</h1>
      //       {console.log(note)}
      //     </div>
      // )
    }
  }
  
  
  export default SingleNote;