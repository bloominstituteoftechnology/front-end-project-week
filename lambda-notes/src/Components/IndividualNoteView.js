import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { getNote, deleteNote } from '../actions'; 
import { Link } from 'react-router-dom'; 

class IndividualNoteView extends Component{
    constructor(){
        super(); 
        this.state = {
            currentNote: '',
            showModal: false,
        }
    }

    componentDidMount(){
        const id = parseInt(this.props.match.params.id)
        this.getNote(id)
    }

    showModalHandler = () => {
        this.setState({
            showModal: true
        })
    }

    cancelDeleteHandler = () => {
        this.setState({
            showModal: false
        })
    }

    deleteNoteHandler = () => {
        const id = parseInt(this.props.match.params.id)
        this.props.deleteNote(id)
    }

    getNote = (id) => {
        let note; 
            for(let x = 0; x < this.props.notes.length; x++){
                if(this.props.notes[x].id === id){
                    note = this.props.notes[x];
                }
            }
       this.setState({
           currentNote: note
       })
    }
    
    render(){ 

        let modalShowStyle; 
        if(this.state.showModal){
            modalShowStyle = {
                display: 'block'
            }
        }else {
            modalShowStyle = {
                display: 'none'
            }
        }

        return (
            <div key = {this.state.currentNote.id} className= "note-individual">
                <div style = {modalShowStyle} className = "modal">
                    <p> Are you sure you want to delete this? </p>
                    <Link to = "/" onClick = {this.deleteNoteHandler}> Delete</Link>
                    <button onClick = {this.cancelDeleteHandler}> No </button>
                </div>
                <div className = "buttons">
                    <div className = "delete-button" onClick = {this.showModalHandler}> Delete </div>
                    <div className = "edit-button" >Edit</div>
                </div>
                <h2 className = "individual-note-title">{this.state.currentNote.title}</h2>
                <p>{this.state.currentNote.content}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {getNote, deleteNote})(IndividualNoteView); 