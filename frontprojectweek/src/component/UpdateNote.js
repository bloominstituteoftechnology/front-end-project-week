import React ,{Component}from 'react';
import {Link, Route} from "react-router-dom";
import axios from 'axios'


class UpdateNote extends Component {
  constructor(props){
    super(props)
    this.state={
      notes : this.props.notes,
      titleUpdate : '', 
      textBodyUpdate: ''
    }
  }
  handleInputChange2 = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
    console.log(ev.target.value)
    ev.preventDefault();
  };

  handleUpdateNote = (ev) => {
   let id = this.props.id
    ev.preventDefault();
    
          axios
          .put(`https://fe-notes.herokuapp.com/note/edit/${id}`,
          {
            title:this.state.titleUpdate,
            textBody:this.state.textBodyUpdate,
            id :id
          })
          .then(response => {
            this.setState({notes : response.data}) 
            console.log(this.state.notes)
          })
          .catch(err => {
            console.log("IN CATCH", err);
          });
          
          this.state.titleUpdate =''
          this.state.textBodyUpdate =''
          window.location.reload();
      };
     
render(){
  return (
      <div className="cardUpdate  bg-wht">

<form class="form-updatenote ">
    
  <div class="form-group ">
  
    <input type="email" class="form-control"  name ='titleUpdate'  placeholder={this.props.title} onChange={this.handleInputChange2}/>
  </div>
  <div class="form-group">
    <textarea class="form-control textarea"  placeholder={this.props.textBody} name ="textBodyUpdate" onChange={this.handleInputChange2}></textarea>
  </div>
  <Link to={`/Notes/${this.props.id}`} ><a href="#" type ="submit" className="btn btnhome btn-primary"onClick={this.handleUpdateNote}>Update</a></Link>
    <Link to={`/Notes/${this.props.id}`} ><a href="#" className="btn btnhome btn-warning" >Cancel</a></Link>
  </form>
  </div>
    
  );
};
}


export default UpdateNote;

