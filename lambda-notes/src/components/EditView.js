import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, } from 'reactstrap';
import{ Link } from 'react-router-dom'
import {notes} from '../Notes/notes'

class EditView extends Component {
    constructor(props){
        super(props)
        this.state={
            note:[], 
        };
    }
    componentDidMount(){
        const { id } = this.props.match.params; 
       console.log(this.state)
        this.setState({note:notes[id]})
    }
render(){
return(
    
    <Form>
        <FormGroup>
     <Label className="label-styles editLabel-styles" for="note">Edit Note:</Label>  
     <Input className="createInput-styles" type="text" name="Title"  placeholder="Note Title" /> 
     </FormGroup>
     <FormGroup>
     <Input className="createBody-styles" type="textarea" name="text" id="exampleText" placeholder="Note Content" />
     </FormGroup>
          <Link to="/"><Button className="button createButton-styles">Update</Button></Link>
    </Form>
  

)



}

}
export default EditView;