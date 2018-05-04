import React,{Component} from 'react';
class UpdateNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: '',
        title: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
      this.handleChangeTitle=this.handleChangeTitle.bind(this);
    }
  
    handleChange(event) {
      this.setState({notes: event.target.value});
    }
    handleChangeTitle(event) {
        this.setState({title: event.target.value});
      }
    
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
          <div class='container'>
        <div class = 'button3'>
        <h1>Lambda Notes</h1>
        <button> View Your Notes</button><br/>
        <button> + Create your Notes</button>
        </div>
        
          <form onSubmit={this.handleSubmit}>
          <h2>Edit Notes:</h2>
            <input class = 'kin' type ='text' placeholder ='Enter your title' 
            value = {this.state.title} onChange ={this.handleChangeTitle} /><br />
              <textarea value={this.state.notes} placeholder = 'Enter your notes'
              onChange={this.handleChange} cols={60} rows={30} />
            <button type="submit" value="Save">Update </button>
          </form>
          </div>
      );
    }
  }
  export default UpdateNote;