import React from "react"
import './component.css'
import { Link } from 'react-router-dom';
import DeleteModal from "./DeleteModal";


class SingleNote extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showModal: false,
        }
    }

    handleShowMessageClick = () => this.setState({showModal: true})
    handleCloseModal = () => this.setState({showModal: false})

    render() {
        return (
            <div className="single-note">
                <div className="delete-edit">
                    <h1 onClick={(ev)=> {this.props.goToEditForm(ev, this.props.note._id)
                    this.props.history.push(`/edit-Note/${this.props.note._id}`)}}>Edit</h1>
                    <h1 onClick={this.handleShowMessageClick
                    }>Delete</h1>
                </div>
                <h1 className="single-title">
                    {this.props.note && this.props.note.title}
                </h1>
                <p className="single-para">
                    {this.props.note && this.props.note.textBody}
                </p>
                {this.state.showModal ? (
                <DeleteModal onClose={this.handleCloseModal} note={this.props.note} deleteNote={this.props.deleteNote}>
                    <p className="modal-text">Are you sure you want to delete this?</p>
                </DeleteModal>
          ) : null}
            </div>
        )
    }

}

export default SingleNote;



{/* <h1 onClick={() => {
                        this.props.deleteNote(this.props.note._id);
                        this.props.history.push('/note-list')
                    }}>Delete</h1> */}




// import React from "react"
// import './component.css'
// import { Link } from 'react-router-dom';

// const SingleNote = ({ note, history, deleteNote, goToEditForm }) => {

//     return (
//         <div className="single-note">
//             <div className="delete-edit">
//                 <h1 onClick={(ev)=> {goToEditForm(ev, note._id)
//                 history.push(`/edit-Note/${note._id}`)}}>Edit</h1>
//                 <h1 onClick={() => {
//                     console.log("note_id", note._id)
//                     deleteNote(note._id);
//                     history.push('/note-list')
//                 }}>Delete</h1>
//             </div>
//             <h1 className="single-title">
//                 {note && note.title}
//             </h1>
//             <p className="single-para">
//                 {note && note.textBody}
//             </p>
//         </div>
//     )
// }

// export default SingleNote;