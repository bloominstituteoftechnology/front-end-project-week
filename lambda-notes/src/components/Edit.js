import React from 'react'; 
import './CreateNew.css'; 

export default class CreateNew extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      title: '',
      content:''
    }
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitEdit = (event) => {
    event.preventDefault(); 

    let note = {
      title: this.state.title,
      content: this.state.content
    }

    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, note)
    .then(res => {
      console.log(res);
      this.setState({ title: " ", content: " " });
    })
    .catch(() => alert("Encountered an error loading your note"));
  }

  render(){
    return(
      <div>
        <h3>Edit Note:</h3> 
        <form onSubmit={this.submitEdit}>
          <input onChange={this.inputHandler} value={this.state.title} name="title" placeholder="Note Title" className='input' type='text'/>
          <input onChange={this.inputHandler} name="content" value={this.state.content} placeholder="Note Content" className="text-area" type='text'/> 
          <button type="submit" className="button-2">Save</button> 
        </form> 
      </div> 
    )
  }
}