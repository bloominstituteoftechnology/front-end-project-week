import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import{ Link } from 'react-router-dom'
import {notes} from '../Notes/notes'


class EditView extends Component {
    constructor(props){
        super(props)
        this.state={
            note:[],
            text:'',
            textbody:'', 
        };


        
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        console.log(this.props) 
        this.setState({note: notes[id]})
        console.log(this.state) 
       
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
render(){
    console.log(this.state.note)
return(
    
    <Form>
        <FormGroup>
     <Label className="label-styles editLabel-styles" for="note">Edit Note:</Label>  
     <Input 
        onChange={this.handleInputChange}
        className="createInput-styles" 
        placeholder={this.state.note.title}
        value={this.state.title}
        name="title"  
         /> 
     </FormGroup>
     <FormGroup>
     <Input 
        onChange={this.handleInputChange}
        className="createBody-styles"
        placeholder={this.state.note.textbody}
        name="textarea"
        type="textarea" 
        id="exampleText"  
        value={this.state.textarea} />
     </FormGroup>
          <Link to="/"><Button className="button createButton-styles">Update</Button></Link>
    </Form>
  

)



}

}
export default EditView;