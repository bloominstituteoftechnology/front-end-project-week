import React, { Component } from 'react';
import './index.css';
import Sidebar from './Sidebar';
import { Header } from './Header';
import { Link } from 'react-router-dom';


class SingleNoteView extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal:false,
            note: {}
        };
        this.toggle=this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    componentDidMount(){
        this.setState({note: this.props.location.state.element});


    }


    render(){
        return(
            <div className="single-note-component-wrapper">
            <div className="singular-note-container">
                <div className="edit-delete-bar">
                   <Link 
                        to={{pathname:`/notes/${this.state.note.id}/edit`, state: this.state.note}} 
                        className="link-edit-delete"> 
                            <div className="link edit-link">Edit</div>
                    </Link>
                    <div 
                        className="link" 
                        onClick={this.toggle}>Delete</div>
                    <div /*This div contains all the components of the modal*/
                        className={this.state.modal? "modal-content": "hidden"} 
                        onClick={this.toggle}>
                        <h5 className="modal-header">Are you sure you want to delete this note?</h5>
                            <div className="modal-footer">
                                <button className="delete-button">Delete</button>
                                <button className="no-button">No</button>
                            </div>
                                {/* This div contains all the components of the modal */}
                    </div>
                </div>
                <Header text={this.state.note.title}/>
                <p className="note-body-single">{this.state.note.body}</p>
            </div>
            </div>
        )
    }
}


                 
                           





    
    

export default SingleNoteView;
