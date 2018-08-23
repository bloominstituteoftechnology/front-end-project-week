import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { deleteNote, fetchNotes } from '../actions'
import { connect } from 'react-redux';

class NoteView extends Component {
    constructor(props){
        super(props)
        this.state={
            modal:false
        }
    }

    toggleModal = () =>{
        this.setState({modal: !this.state.modal})
    }

    handleDelete = () =>{        
        this.props.deleteNote(this.props.id);
        this.props.fetchNotes()
        window.location.href = "/";
    }

    render(){
        return(
            
            <div className = "note-page-wrap" >
                <div className={this.state.modal ? "modal display" : "modal"}>                
                    <div className="modal-content">                        
                        <p>Are you sure you want to delete this?</p>
                        <div className="modal-btns">                            
                            <button className="delete-btn" onClick = {this.handleDelete} >Delete</button>                                                       
                            <button onClick={this.toggleModal}>No</button>
                        </div>
                    </div>
                </div>
                <div className = "note-page">
                    <div className = "note-links">
                        <Link to = {`/${this.props.id}/edit`}><span>edit</span></Link>
                        <span onClick={this.toggleModal}>delete</span>
                    </div>
                    <h2 className = "note-title">{this.props.notes[this.props.notes.findIndex(n => n.id===this.props.id)].title}</h2>
                    <p className = "note-content">{this.props.notes[this.props.notes.findIndex(n => n.id===this.props.id)].note}</p>
                </div>
            </div>
        )
    }
} 

const mapStatetoProps = (state) => {
    return{
        id: state.selectedId,
        notes: state.notes
    }
}

export default connect(mapStatetoProps, { deleteNote, fetchNotes })(NoteView) 