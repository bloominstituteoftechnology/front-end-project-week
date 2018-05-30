import React,{Component} from 'react'
import axios from 'axios'
import{Tooltip,Input,Label,Form,Collapse,Col,Row,FormGroup } from 'reactstrap'

class Update extends Component{
constructor(props){
    super(props)
    this.state={
        title:'',
        textbody:'',
        collapse:false,
        

    }
}
toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
checkToggle =(id)=>{
    console.log(this.state)
  if(this.state.collapse === false){ 
  this.toggle()
}else{
  this.update(id);
  this.toggle();
}
}
update = id=>{
    const note={}
    if(this.state.title  !==""){
        note.title=this.state.title
    }
    if(this.state.textbody  !==""){
        note.textbody = this.state.textbody
    }
    axios
    .put(`https://notes-back-end.herokuapp.com/notes/${id}`,note)
    .then(response=>{
        this.setState({title:'',textbody:''})
        window.location.reload()
    })
    .catch(err=>{
        console.log(err)
    })

}
handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
render(){
    
    return(<React.Fragment>
        <div onClick={() => this.checkToggle(this.props.id)}>{<i class="fas fa-edit"></i>}</div>
      <Row> 
          <Col xs="12">    
        <Collapse className="updateInput-styles" isOpen={this.state.collapse}>
     <Col xs ="12">
        <Form className="inputForm-styles" onSubmit={()=>this.update(this.props.id)}>
<Col xs="12">
        <Label className="label-styles">Title:</Label>
  
    <Input
  
     onChange={this.handleInputChange}
     placeholder="title..."
     value={this.state.title}
     name="title"
     /></Col>

     <Col xs="12">

    <Label className="label-styles">Text:</Label>
    <Input
    className="textarea-styles" type="textarea" 
    onChange={this.handleInputChange}
    placeholder="Text..."
    value={this.state.textbody}
    name="textbody"/>
  </Col>

        </Form>
</Col>    
        </Collapse>
        </Col>
             </Row> 
   </React.Fragment>
   )
}

}
export default Update;