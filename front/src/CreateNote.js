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
      this.setState({Title: event.target.value});
    }
    handleChange = (event) => {
        this.setState({Body: event.target.value});
      }
     handleSubmit = (event) =>{
event.preventDefault();
const addNote ={
    Title: event.target.value,
    Body: event.target.value
}
axios.post('https://backend-project-week.herokuapp.com', {
  Title:this.state.Title,
  Body:this.state.Body,
})
.then(response => {
  console.log(response, ' note saved' )
})
.catch(err => {
  console.log(err, 'sorry, note not saved, try again ');
});
          this.state.notes.push(addNote);
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

        
          <form>
          <h2>Create New Notes:</h2>
            <input class = 'kin' type ='text' placeholder ='Enter your title' 
            value = {this.state.Title} onChange ={this.handleChangeTitle} /><br />
              <textarea value={this.state.Body} placeholder = 'Enter your notes'
              onChange={this.handleChange} cols={60} rows={30} />
            <button onClick={this.onClick}>Save </button>
          </form>
          
          </div>
      );
    }
  }
  export default CreateNote;
  
  