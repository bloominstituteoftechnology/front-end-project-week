import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';
import DeleteModal from '../components/Delete';
import {deleteNote} from '../actions/deleteNote'
import '../style/note.css';

const modalStyles = {
    content: {
        height:'200px',
        width:'400px',
        top: '10%',
        right:'30%',
        left:'35%'
        
    }
}

class Note extends React.Component {
    constructor(){
        super()
        this.state = {
            show:false
        }
    }

    handleDelete = id => {
        this.props.deleteNote(id)
        this.setState({show:!this.state.show})
        this.props.history.push("/")
    }
   handleClose = () => {
       this.setState({show:!this.state.show})
   }

    render(){
        const id = this.props.match.params.id;
        const targetNote = this.props.notes.filter(note => note.id == id)
    return (
     <div className = "note-page">
     <div className = "note-actions">
        <Link to = {"/edit/"+ id}> Edit </Link>
        <button onClick = {() => {this.setState({show:!this.state.show})}}> Delete </button>
        </div>
        <ReactModal style = {modalStyles} isOpen = {this.state.show} shouldCloseOnOverlayClick={true}
        onRequestClose = {()=>{this.setState({show:!this.state.show})}} shouldCloseOnEsc = {true}>
            <DeleteModal closeModal = {this.handleClose}deleteFunc = {()=> {this.handleDelete(id)}}/>
        </ReactModal>
    <div className = "note">
        <h2> {targetNote[0].title} </h2>
        <p> {targetNote[0].content} </p>
    </div>
    </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        notes:state.notes
    }
}
export default connect(mapStateToProps,{deleteNote})(Note);