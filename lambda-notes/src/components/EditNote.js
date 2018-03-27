import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import './EditNote.css';

class EditNote extends Component {
  

    
    render() {
        return (
            
            <div className="container-fluid mainDiv">
      <div className="row  App">
        <div className="col-md-3 col-sm-12 indexCol">
            <div className="titleContainer">
                <div > <h1 className="mainTitle"> Lambda </h1> </div>
                <div > <h1 className="mainTitle"> Notes </h1> </div>
            </div> 
          
        <Link to={'/'}>
          <div> <Button name={'View Your Notes'}/> </div>
        </Link>
        <Link to={'/create-note'}>    
          <div> <Button name={'+Create New Notes'}/> </div>
        </Link>  
        </div>
       
        <div className="col-md-9 col-sm-12 mainDiv">
        <div className="listTitle"> <h4> Edit Note: </h4> </div>
         
            
        <Form>
            <FormGroup>
                <Input className="col-6 mb-4 mt-4" name="title" placeholder="Note Title" />
                <Input className="mb-2" rows="15" name="note" type="textarea" placeholder="Note Content" />
                <button className="updateButton"> Update </button>
            </FormGroup>         
        </Form> 
              

          
        </div>
      </div> 
    </div> // end of container 










             
                  
                
        );
    }
}

export default EditNote;