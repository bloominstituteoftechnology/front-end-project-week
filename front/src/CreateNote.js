import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class CreateNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        note: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
      this.handleChangeTitle=this.handleChangeTitle.bind(this);
    }
  
    handleChange = (event) => {
      this.setState({notes: event.target.value});
    }
    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
      }
    
    handleSubmit = (event)  => {
      event.preventDefault();

      const newNote = {
          title: this.state.title,
          note: this.state.note

      }
axios.post('http://localhost:3000/ListView',{newNote})
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.setState({
          note: '',
          title: '',
         
        });
              });
  };

    
  
    render() {
      return (
          <div class='container'>
        <div class = 'button3'>
        <h1>Lambda Notes</h1>
       <button> <Link to='/ListView'> View Your Notes</Link></button><br/>
       <button> <Link to='CreateNote'> + Create Your Notes</Link></button>
        </div>
        
          <form onSubmit={this.handleSubmit}>
          <h2>Create New Notes:</h2>
            <input class = 'kin' type ='text' placeholder ='Enter your title' 
            value = {this.state.title} onChange ={this.handleChangeTitle} /><br />
              <textarea value={this.state.notes} placeholder = 'Enter your notes'
              onChange={this.handleChange} cols={60} rows={30} />
            <button type="submit" value="Save">Save </button>
          </form>
          </div>
      );
    }
  }
  export default CreateNote;
  
  