import React, { Component } from 'react';
import './index.css';
import Sidebar from './Sidebar';
import { Header } from './NoteList';
import { Link } from 'react-router-dom';


class SingleNoteView extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal:false,
        };
        this.toggle=this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    componentWillMount(){
        let routeId = this.props.match.params.id;
        console.log("THISFORID",this.props.match.params.id);
        let matched = this.props.location.state[0].dummydata.filter((noteItem)=> 
          noteItem.id === Number(routeId)
     );
     console.log ("this matches", matched);
     return this.setState(matched);


    }


    render(){
        console.log(this.state[0]);
        return(
            <div className="single-note-component-wrapper">
            <Sidebar />
            <div className="singular-note-container">
                <div className="edit-delete-bar">
                   <Link 
                        to={{pathname:`/notes/${this.state[0].id}/edit`, state: this.state[0]}} 
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
                <Header text={this.state[0].note_title}/>
                <p className="note-body-single">{this.state[0].note_body}</p>
            </div>
            </div>
        )
    }
}


                 
                           





    
    

export default SingleNoteView;
