import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';


import './EditNote.css';

class EditNote extends Component {
  
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
                <div > <h1 className="mainTitle"> Lambda </h1> </div>
                <div className="botTitleDiv"> <h1 className="mainTitle"> Notes </h1> </div>
            </div> 
          
            <div> <button onClick={()=>{this.viewNotesRoute()}} className="button"> View Your Notes </button> </div>
            <div> <button onClick={()=>{this.createNoteRoute()}} className="button">Create New Notes</button> </div>

        </div>
       
        <div className="col-md-9 col-sm-12 mainDiv">
        <div className="listTitle"> <h4> Edit Note: </h4> </div>
         
            
        <Form>
            <FormGroup>
                <Input className="col-6 mb-4 mt-4" name="title" placeholder="Note Title" />
                <Input className="mb-2" rows="15" name="note" type="textarea" placeholder="Note Content" />
                <div className="updateButtonDive"><button className="updateButton"> Update </button></div>
            </FormGroup>         
        </Form> 
              

          
        </div>
      </div> 
    </div> // end of container 
                            
        );
    }
}

export default withRouter(EditNote);