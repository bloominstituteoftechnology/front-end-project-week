import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, } from 'reactstrap';


const CreateView =()=> {


return(
    
    <Form>
     <Label for="note">Create New Note:</Label>  
     <Input type="text" name="Title"  placeholder="Note Title" /> 
     <FormText color="muted"  placeholder="Note content">
        
          </FormText>
          <Button>save</Button>
    </Form>
  

)





}
export default CreateView;