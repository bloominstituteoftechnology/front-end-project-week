import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, } from 'reactstrap';
import{ Link } from 'react-router-dom'

const CreateView =()=> {


return(
    
    <Form>
        <FormGroup>
     <Label className="label-styles" for="note">Create New Note:</Label>  
     <Input className="createInput-styles" type="text" name="Title"  placeholder="Note Title" /> 
     </FormGroup>
     <FormGroup>
     <Input className="createBody-styles" type="textarea" name="text" id="exampleText" placeholder="Note Content" />
     </FormGroup>
          <Link to="/"><Button className="button createButton-styles">save</Button></Link>
    </Form>
  

)





}
export default CreateView;