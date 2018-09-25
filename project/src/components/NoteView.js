
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

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

    render(){
        return(
            
            <div className = "note-page-wrap" >
                <div className={this.state.modal ? "modal display" : "modal"}>                
                    <div className="modal-content">                        
                        <p>Are you sure you want to delete this?</p>
                        <div className="modal-btns">
                            <Link to = '/'>
                                <button className="delete-btn" onClick = {this.props.handleDelete}>Delete</button>
                            </Link>                            
                            <button onClick={this.toggleModal}>No</button>
                        </div>
                    </div>
                </div>
                <div className = "note-page">
                    <div className = "note-links">
                        <Link to = {`/${this.props.match.params.id}/edit`}><span>edit</span></Link>
                        <span onClick={this.toggleModal}>delete</span>
                    </div>
                    <h2 className = "note-title">{this.props.notes[this.props.match.params.id].title}</h2>
                    <p className = "note-content">{this.props.notes[this.props.match.params.id].note}</p>
                </div>
            </div>
        )
    }
} 

export default withRouter(NoteView)