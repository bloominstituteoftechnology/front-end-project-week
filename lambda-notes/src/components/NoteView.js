import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

      editNoteRoute() {
        this.props.history.push("/edit-note");
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


        <div className="head"><p className="headText" onClick={()=> {this.editNoteRoute()}}>edit</p> 
        <p className="headText" onClick={()=>{this.toggle()}}>delete</p> 
        </div>
       
         
        <h1> {this.props.notesList[0].title}</h1> 
        
       <p>{this.props.notesList[0].note}</p>
     
              

          
        </div>
      </div> 

      
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
          <button className="redButton" onClick={this.toggle}>Delete </button>{' '}
            <button className="blueButton" onClick={this.toggle}>No</button>
          </ModalBody>
        
        </Modal>
    </div> // end of container 


       
    
            
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    notesList: state.notesList,
  }
}

export default connect(mapStateToProps)(withRouter(NoteView));