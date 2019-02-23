import React from 'react';
import '../App.css';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


Modal.setAppElement('div')

class Note extends React.Component {
    constructor(props){
        super(props)
        this.state={
            note: {},
            modalIsOpen: false,
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        this.fetchNote(id);       
    }

    fetchNote = id => {
        axios
            .get(`http://localhost:5050/api/notes/${id}`)
            .then(response => {
                this.setState({note: response.data[0]})
            })
            .catch(err => {
                console.log("IN CATCH", err);
            })
    }

    openModal = () => {
        this.setState({modalIsOpen: true})
    }

    closeModal = () => {
        this.setState({modalIsOpen: false})
    }

    deleteNote = (id) => {
        // const id = this.state.note._id
        axios
          .delete(`http://localhost:5050/api/notes/${id}`)
          .then(response => {
            console.log(response)
          })
          .catch(err => {
            console.log(err);
          })
          //this.props.history.push('/');
    }
    
    
    render(){
        const id = this.props.match.params.id
        return(
            <div className='note-page'>
                <div className='note-header'>
                    <h2>{this.state.note.title}</h2>
                    <div>
                        <Link to={`/edit/${id}`}>edit</Link>
                        <span onClick={this.openModal}>delete</span>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                        >
                            <h2>Are you sure you want to delete this note?</h2>
                            <button onClick={this.deleteNote}>Yes</button>
                            <button onClick={this.closeModal}>No</button>                    
                        </Modal>
                    </div>
                </div>
                <div>{this.state.note.note}</div>
                
            </div>
        )
    }
}

export default Note;

// class Note extends Component {
//     state = {
//         note: [],
//         showModal: false
//     }

//     fetchNote = id => {
//         axios
//             .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
//             .then(response => this.setState({ note: response.data }))
//             .catch(response => console.log(response));
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id
//         this.fetchNote(id);
//     }

//     deleteNote = () => {
//         const id = this.state.note._id
//         axios
//           .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
//           .then(response => {
//             this.setState({
//               notes: response.data
//             })
//           })
//           .catch(err => {
//             console.log(err);
//           })
//       }

//     openModal = () => {
//         this.setState({ showModal: true });
//     };

//     closeModal = () => {
//         this.setState({ showModal: false });
//     };

//     render() {
//         const { _id } = this.state.note


//         return (
//             <div>
//                 <div>
//                     <div>
//                         <NavLink 
//                             to={`/edit/${_id}`}>
//                             <p>edit</p>
//                         </NavLink>
//                     </div>
//                     <div>
//                         <p onClick={this.openModal}>delete</p>
//                     </div>
//                 </div>
//                 <div>
//                     <h2>{this.state.note.title}</h2>
//                     <p>{this.state.note.textBody}</p>
//                 </div>
//                 <Modal                    
//                     isOpen={this.state.showModal}
//                     onRequestClose={this.closeModal}
//                     contentLabel='Are you sure you want to DELETE?'>

//                     <div>
//                         <p>Are you sure you want to delete this?</p>
//                     </div>
//                     <div>
//                         <Link to="/">
//                         <button  
//                             onClick={this.deleteNote}>
//                             Delete
//                         </button>
//                         </Link>
//                         <button                             
//                             onClick={this.closeModal}>
//                             No
//                         </button>
//                     </div>
//                 </Modal>
//             </div>
//         )
//     }
// };