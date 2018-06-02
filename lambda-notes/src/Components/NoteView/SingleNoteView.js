import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EditNote from '../EditNote/EditNote';
import { Link } from 'react-router-dom';
import './SingleNoteview.css';
import {connect} from 'react-redux';
import {readNote} from '../../JS/actions/index-a';
import {deleteNote} from '../../JS/actions/index-a';

const mapStateToProps = (state) =>{
   return {reduxState:state}
}

class SingleNoteView extends Component{
    constructor(){
        super();
        this.state = {
            modal: false,
            matched: [],


        }
        this.toggle = this.toggle.bind(this);
    }

    
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    handleDelete = ()=> {
        let todelete = this.state.matched[0].id;
        this.props.deleteNote(todelete);
        this.props.history.push('/');

    }
    componentWillMount(){
        console.log("THIS",this.props.reduxState.notes.note); //this directly accesses the array of note objects
        let routeId = this.props.match.params.id;
        console.log("THISFORID",this.props.match.params.id);
        let matched = this.props.reduxState.notes.note.filter((noteItem)=> 
          noteItem.id === Number(routeId)
     );
     console.log ("this matches", matched);
     this.setState({matched});
     console.log(this.state.matched);

    }

    render(){
        const shortenedVar =  this.props.reduxState.notes.note;
    console.log("this.state.matched", this.state.matched);
    console.log("note_title", this.state.matched[0].note_title)
        const note_title = this.state.matched[0].note_title;
        const note_body = this.state.matched[0].note_body;
    console.log("REDUX STORE ARRAY OF NOTE OBJ",this.props.reduxState.notes.note);
    console.log("shortened",shortenedVar);
    return(
            <div className="single-note-container">
                <Sidebar />
                <div className="single-note-wrapper">
                    <div className="link-wrapper">
                        <Link to = {`/edit/${this.props.match.params.id}`} component={EditNote}>
                        <div className="link-button">edit</div>
                        </Link>
                        <div 
                            className="link-button" 
                            onClick={this.toggle} 
                            toggle={this.state.modal}>
                            delete
                        </div>
                        <div>
                            <div /*This div contains all the components of the modal*/
                                className={this.state.modal? "modal-content": "hidden"} 
                                onClick={this.toggle} toggle={this.state.modal}>
                                <h5 className="modal-header">Are you sure you want to delete this note?</h5>
                                    <div className="modal-footer">
                                        <button className="delete-button" onClick ={this.handleDelete} todelete = {`${this.state.matched[0].id}`}>Delete</button>
                                        <button className="no-button">No</button>
                                    </div>
                                {/* This div contains all the components of the modal */}
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper">
                        <h4 className="text-title"><h4>{note_title}</h4></h4>
                        <p className = "text-body">{note_body}</p>
                    </div>
                </div>
                
            </div>
        )
            
  }
}

        


export default connect(mapStateToProps, {readNote, deleteNote})(SingleNoteView);

