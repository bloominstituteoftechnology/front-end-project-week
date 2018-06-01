import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EditNote from '../EditNote/EditNote';
import { Link } from 'react-router-dom';
import './SingleNoteview.css';
import {connect} from 'react-redux';
import {readNote} from '../../JS/actions/index-a';

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
    componentWillMount(){
        console.log("THIS",this.props.reduxState.notes.note); //this directly accesses the array of note objects
        let routeId = this.props.match.params.id;
        console.log("THISFORID",this.props.match.params.id);
        let matched = this.props.reduxState.notes.note.filter((noteItem)=> 
          noteItem.id === Number(routeId)
     );
     console.log(matched);
     this.setState(matched);
    }

    render(){
    console.log("REDUX STORE ARRAY OF NOTE OBJ",this.props.reduxState.notes.note);
    const shortenedVar =  this.props.reduxState.notes.note;
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
                                        <button className="delete-button">Delete</button>
                                        <button className="no-button">No</button>
                                    </div>
                                {/* This div contains all the components of the modal */}
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper">
                        <h4 className="text-title">this is where we need to read title from note</h4>
                        <p className = "text-body">this is where we need to read body</p>
                    </div>
                </div>
                
            </div>
        )
            
  }
}

        


export default connect(mapStateToProps, {readNote})(SingleNoteView);

