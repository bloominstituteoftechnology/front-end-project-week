import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EditNote from '../EditNote/EditNote';
import { Link } from 'react-router-dom';
import './SingleNoteview.css';
import {connect} from 'react-redux';

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
     return matched;
    }

    render(){
    console.log("REDUX STORE ARRAY OF NOTE OBJ",this.props.reduxState.notes.note);
        return(
            <div className="single-note-container">
                <Sidebar />
                <div className="single-note-wrapper">
                    <div className="link-wrapper">
                        <Link to = {`/edit/${this.state.matched.id}`} component={EditNote}>
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
                        <h4 className="text-title">{"placeholder title"}</h4>
                        <p className = "text-body">{"placeholder for body"}</p>
                    </div>
                </div>
                
            </div>
        )
            
  }
}

        


export default connect(mapStateToProps, {/*actions go here*/})(SingleNoteView);

