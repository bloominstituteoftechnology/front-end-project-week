import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import NoteCard from './NoteCard'
import {withRouter} from 'react-router-dom'

class NoteView extends Component {
    state = {
      content:'',
      title:'',
      id:null
    }
     componentDidMount(){
    const id = this.props.match.params.id;
    let note = this.props.notes.filter(note => note.id===Number(id));
    note= note[0];
    this.setState({content:note.content, title:note.title, id:note.id});
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
                            <Link to = '/' onClick = {() => this.props.handleDelete(this.props.match.params.id)}>
                                <button className="delete-btn">Delete</button>
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
                    <h2 className = "note-title"> {this.state.title}</h2>
                    <p className = "note-content">{this.state.content}</p>
                </div>
            </div>
        )
    }
} 

export default withRouter(NoteView) 