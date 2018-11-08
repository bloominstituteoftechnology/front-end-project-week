// import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
// import axios from 'axios';
// import React from 'react';



// function Note({note, deleteNote, history, updateNote}) {

//   if (!note) {
//     return <h2>Loading note data...</h2>;
//   }

//   return (
//     <div>
//         <div>

//           <button
//           onClick={event =>{
//             updateNote(event, note);
//             history.push('/create-new-note');}}>      
//             <p>edit</p>

//           </button> 
//           <button
//             onClick={event => {
//               deleteNote(event, note.id);
//               history.push('/');
//             }}>
//             <p>delete</p>
//           </button>
//         </div>
//         <div>
//           {console.log(note)}
//             <h1>{note.title}</h1>
//             <p>{note.textBody}</p>
//         </div>
//     </div>
//    )
// }


// export default Note;



import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import Markdown from 'react-markdown';
import Modal from 'react-modal';
import './Note.css';



class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNote: '',
      note: [],
      showModal: false
    }
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => this.setState({ note: response.data }))
      .catch(response => console.log(response));
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchNote(id);
  }

  deleteNote = (ev) => {
    const id = this.state.note._id
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        this.setState({ notes: response.data });

      })
      .catch(error => console.log(error));
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    // const id = this.props.match.params.id.slice(1);

    // const note = this.props.notes[id]

    const { title, textBody, _id } = this.state.note


    return (
      <div>
        <div className='edit-delete'>
          <div>
            <NavLink to={`/edit/${_id}`}>
              <p className='edit'>edit</p>
            </NavLink>
          </div>
          <div>
            <p onClick={this.openModal}>delete</p>
          </div>
        </div>
        <div className='note-full-body'>
        <h2 className='home-title'>{this.state.note.title}</h2>
        <p className='home-body'>{this.state.note.textBody}</p>
        </div>
        <Modal
          className='modal'
          isOpen={this.state.showModal}
          onRequestClose={this.closeModal}
          contentLabel='Are you sure you want to DELETE?'>

          <div>
            <p>Are you sure you want to delete this?</p>
          </div>

          <div className='modal-buttons'>
            <Link className="noteLink" to="/">
              <button className='delete-modal' onClick={this.deleteNote}>
                delete
              </button>
            </Link>
            <button className='no-modal' onClick={this.closeModal}>
              No
            </button>
          </div>
          {/* <div>
                <h1>{title}</h1>
                <p>{textBody}</p>
              </div> */}
        </Modal>


      </div>
    )
  }
}

export default Note;
