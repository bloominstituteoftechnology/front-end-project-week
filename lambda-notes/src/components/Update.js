import React,{Component} from 'react'
import{Input,Label,Form,Collapse,Col,Row, } from 'reactstrap'

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
     placeholder="Title"
     value={this.state.title}
     name="title"
     /></Col>

     <Col xs="12">

    <Label className="label-styles">Note:</Label>
    <Input
    className="textarea-styles" type="textarea" 
    onChange={this.handleInputChange}
    placeholder="Note"
    value={this.state.text}
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