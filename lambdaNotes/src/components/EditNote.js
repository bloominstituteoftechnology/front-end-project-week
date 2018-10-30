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
  
   
    }

    componentDidMount(){
  if(this.props.match.params.id) {
   let note = this.props.notes.filter(
      item => item._id === this.props.match.params.id
    );
   this.setState({
     title : note.title,
     textBody : note.textBody, 
     tags : note.tags,
      _id : note._id
   })

   console.log("EDIT NOTE",this.state.title);
  } else {
    alert("wrong note ID");
    this.props.history.push('/');
  }
    }

submitEdit = () =>{
  this.props.submitEdit({...this.state});
 this.props.history.push(`/Notes/${this.state._id}`);
}

handleInputChange = e => {
  this.setState({ [e.target.name]: e.target.value });
}

render() {
  return (
   
    <div className="editNote">
 
        <form onSubmit={this.submitEdit}>
          <input
            onChange={this.handleInputChange}
            placeholder="title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="textBody"
            value={this.state.textBody}
            name="textBody"
          />

          <button type="submit">Submit Edit</button>
        </form>
      </div>

   );
  }
 }

export default EditNote;