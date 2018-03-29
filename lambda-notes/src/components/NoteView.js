import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './NoteView.css'

class NoteView extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          modal: false

        };
        this.toggle = this.toggle.bind(this);   
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }  
  

      editNoteRoute(id) {
        this.props.history.push(`/edit-note/${id}`);
      }


     createNoteRoute() {
      this.props.history.push("/create-note");
    }
  
     viewNotesRoute() {
      this.props.history.push("/");
    }
    
    

render() {
  


     return (
        <div className="container-fluid mainDiv">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
          <div className="titleContainer">
         <div><h1> Lambda </h1></div> 
         <div className="botTitleDiv"><h1> Notes </h1></div>
          </div>
         
          <div> <button onClick={()=> {this.viewNotesRoute()}} className="button"> View Your Notes </button> </div>
      
          
          <div> <button onClick={()=> {this.createNoteRoute()}} className="button">Create New Notes</button> </div>
          
        </div>
       
        <div className="col-md-9 col-sm-12 mainDiv">

        


        <div className="head"><p className="headText" onClick={()=> {this.editNoteRoute(this.props.match.params.id)}}>edit</p> 
        <p onClick={this.toggle} className="headText" >delete</p> 
        </div>
       
         
        <h1> {this.props.notesList[this.props.match.params.id].title}</h1> 
        
       <p>{this.props.notesList[this.props.match.params.id].note}</p>
     
              

          
        </div>
      </div> 


      <div className="test">        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        
          {/* <ModalBody className="mode"> */}
          <div className="outerCont">
            <div className="innerCont">
             <p>Are you sure you want to delete this?</p>
             
             <div className=" buttCon">
             <div className="red"><button className="redButton" onClick={()=>{this.props.deleteNote(this.props.match.params.id)}}>Delete </button></div>
             <div className="blue"><button className="blueButton" onClick={this.toggle}>No</button></div>
             </div>

            </div>
          </div>
          {/* </ModalBody> */}
         
        </Modal>
      </div>

    </div> // end of container 


       
    
            
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    notesList: state.notesList,
  }
}

export default connect(mapStateToProps, { deleteNote })(withRouter(NoteView));