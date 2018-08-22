import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { getNote, deleteNote } from '../actions'; 
import { Link } from 'react-router-dom'; 

class IndividualNoteView extends Component{
    constructor(){
        super(); 
        this.state = {
            showModal: false,
        }
    }

    componentDidMount(){
        const id = parseInt(this.props.match.params.id)
        this.props.getNote(id)
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
            <div key = {this.props.currentNote.id} className= "note">
                <div style = {modalShowStyle} className = "modal">
                    <p> Are you sure you want to delete this? </p>
                    <Link to = "/" onClick = {this.deleteNoteHandler}> Delete</Link>
                    <button onClick = {this.cancelDeleteHandler}> No </button>
                </div>
                <button onClick = {this.showModalHandler}> Delete </button>
                <button>Edit</button>
                <h2>{this.props.currentNote.title}</h2>
                <p>{this.props.currentNote.content}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        notes: state.notes,
        currentNote: state.currentNote
    }
}

export default connect(mapStateToProps, {getNote, deleteNote})(IndividualNoteView); 