import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import {  withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { addNote } from '../actions';



import './CreateNoteForm.css';

class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          note: '',
        };
       
        this.addNote = this.addNote.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handleNoteInput = this.handleNoteInput.bind(this);
      }  
    
      handleTitleInput(event) {

        this.setState({ title: event.target.value })
          console.log(this.state.title);
      }

      handleNoteInput(event) {

        this.setState({ note: event.target.value })
          console.log(this.state.note);
      }

      addNote(event) {
        event.preventDefault();
        let { title, note } = this.state;
        this.props.addNote( title, note );
        this.setState({
          title: '',
          note: '',
        });
        this.props.history.push("/");
      }
    
    viewNotesRoute() {
        this.props.history.push("/");
      }
    

    render() {
        return (
            
            <div className="container-fluid createDiv">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
        <div className="holdsEvery">
        <div className="titleContainer">
            <div > <h1 className="maithis.addNote}nTitle"> Lambda </h1> </div>
            <div className="botTitleDiv" > <h1 className="mainTitle"> Notes </h1> </div>
        </div>   
        
        <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-12"> <button className=" button"  onClick={()=> {this.viewNotesRoute()}}> View Your Notes </button> </div>
        <div className="col-xs-12 col-sm-6 col-md-12"><button className=" button"> Create New Notes </button> </div>
        </div>  

</div>
        </div>
       
        <div className="col-md-9 col-sm-12 createDiv">
        <div className="listTitle"> <h4> Create New Note: </h4> </div>
         
            
        <Form onSubmit={this.addNote}>
            <FormGroup>
                <Input  onChange={this.handleTitleInput} value={this.state.newTitle} className="col-6 mb-4 mt-4" name="title" placeholder="Note Title" />
                <Input  onChange={this.handleNoteInput} value={this.state.newNote} className="mb-2" rows="15" name="note" type="textarea" placeholder="Note Content" />
                <div className="createButtonDiv"><button className="createButton" > Save </button></div>
            </FormGroup>         
        </Form> 
              

          
        </div>
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



export default connect(mapStateToProps, { addNote })(withRouter(CreateNoteForm));