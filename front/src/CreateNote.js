import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CreateNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
       Title:'',
       Body:''
      };
      this.handleChangeTitle=this.handleChangeTitle.bind(this);
    this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
  
    handleChangeTitle = (event) => {
      this.setState({title: event.target.value});
    }
    handleChange = (event) => {
        this.setState({note: event.target.value});
      }
     handleSubmit = (event) =>{
event.preventDefault();
          this.state.notes.push();
          this.setState({
            Title:'',
            Body:'' 
          })
      }
 
    
    
    render(){
        
      return (
          <div className='container'>
        <div className = 'button3'>
        <h1>Lambda Notes</h1>
       <button> <Link to='Data'> View Your Notes</Link></button><br/>
       <button> <Link to='CreateNote'> + Create Your Notes</Link></button>
        </div>

        
          <form onSubmit={this.handleSubmit} >
          <h2>Create New Notes:</h2>
            <input class = 'kin' type ='text' placeholder ='Enter your title' 
            value = {this.state.Title} onChange ={this.handleChangeTitle} /><br />
              <textarea value={this.state.Body} placeholder = 'Enter your notes'
              onChange={this.handleChange} cols={60} rows={30} />
            <button>Save </button>
          </form>
          
          </div>
      );
    }
  }
  export default CreateNote;
  
  