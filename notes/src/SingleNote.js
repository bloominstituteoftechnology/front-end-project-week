import React from 'react';
import Modal from './Modal';
 
class SingleNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModal: false,
      note: {
        title: '',
        textBody: ''
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
    const myId = this.props.match.params._id;
    console.log(myId)
    console.log(this.props.notes)
    // console.log(this.props.notes)
    const foundNote = this.props.notes.find(note => note._id === myId)
    console.log(foundNote)
    this.setState({
      note: foundNote
    })
    // const myNote = this.props.notes.find((note) =>)
  }

  deleteConfirmed = (event) => {
    this.props.deleteNote(event, this.state.note._id);
    this.props.history.push('/notes/')
  }

  render(){
    return (
      <div>
        <div>
          <h3 onClick={this.showModal}>
            Delete
          </h3>
          <h3 onClick={event => {
            this.props.editNote(event, this.state.note);
            this.props.history.push('/new_note')}}>
            Edit
          </h3>
          <Modal 
            show={this.state.deleteModal} 
            handleClose={this.hideModal}
            deleteConfirmed={this.deleteConfirmed}>
            <p>Are you sure you want to delete this?</p>
          </Modal>
        </div>
        <p>{this.state.note.title}</p>
        <p>{this.state.note.textBody}</p>
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