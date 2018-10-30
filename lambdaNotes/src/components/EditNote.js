import React, { Component } from "react";


 class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    title:'',
    textBody:'',
    tags:{},
    _id:'',
    };
    this.note = {};

    this.submitEdit = this.submitEdit.bind(this);
  }

 
 
  
  componentDidMount(){
    console.log("EditNote begin props = ", this.props);
  if(this.props.match.params.id) {
   this.note = this.props.notes.filter(
      item => item._id === this.props.match.params.id
    );
    this.note = this.note[0];
    console.log("EditNote begin this.note = ", this.note);
   this.setState({
     title :  this.note.title,
     textBody :  this.note.textBody, 
     tags :  this.note.tags,
      _id :  this.note._id
   })
   console.log("EDIT NOTE this.state.title = ",this.state.title);

  } else {
    alert("wrong note ID");
    this.props.history.push('/');
  }
    }

submitEdit = () =>{
  this.props.submitEdit(this.state);
 this.props.history.push(`/Notes/${this.state._id}`);
}

handleInputChange = e => {
  this.setState({ [e.target.name]: e.target.value });
}

render() {
  return (
   
    <div className="editNote">
      <h3>Edit Notes : </h3>
        <form onSubmit={this.submitEdit}>
          <input
            onChange={this.handleInputChange}
            placeholder="title"
            value={this.state.title}
            name="title"
            size="50"
          />
          <textarea 
            onChange={this.handleInputChange}
            placeholder="textBody"
            value={this.state.textBody}
            name="textBody"
            
            
          />

          <button type="submit">Update</button>
        </form>
      </div>

   );
  }
 }

export default EditNote;