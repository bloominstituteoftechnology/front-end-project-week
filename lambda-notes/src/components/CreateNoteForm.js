import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

import NotesList from '../components/NotesList';
import Button from '../components/Button';
import './CreateNoteForm.css';

class CreateNoteForm extends Component {
  
    render() {
        return (
            
            <div className="container-fluid createDiv">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
        <div className="titleContainer">
            <div > <h1 className="mainTitle"> Lambda </h1> </div>
            <div > <h1 className="mainTitle"> Notes </h1> </div>
        </div>   
          
        <Link to={'/'}>
          <div> <Button name={'View Your Notes'}/> </div>
        </Link>

          <div> <Button name={'+Create New Notes'}/> </div>
        </div>
       
        <div className="col-md-9 col-sm-12 createDiv">
        <div className="listTitle"> <h4> Create New Note: </h4> </div>
         
            
        <Form>
            <FormGroup>
                <Input className="col-6 mb-4 mt-4" name="title" placeholder="Note Title" />
                <Input className="mb-2" rows="15" name="note" type="textarea" placeholder="Note Content" />
                <button className="createButton" > Save </button>
            </FormGroup>         
        </Form> 
              

          
        </div>
      </div> 
    </div> // end of container 
                 
                
        );
    }
}

export default CreateNoteForm;