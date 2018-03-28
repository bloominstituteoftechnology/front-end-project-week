import React from 'react';
import { Button } from 'reactstrap';
import Buttons  from './Buttons';
import './NewNote.css';
import './Buttons.css';
import { Link } from 'react-router-dom';

class NewNote extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
   
  handleSubmit(event) {    
    event.preventDefault();
    this.setState({ name: '', text: ''})
  }

    render() {
      return (
        <div>
          <div>        
            <div className="row no-gutters">
              <div className="sideBar col-2">
                <span className="lambdaNotes">Lambda <br /> Notes</span>
                  <span className="buttons"><Buttons /></span>
                    </div>
                      <div className="noteSection col-md-10">
                        <span className="yourNotes">Create New Note:</span>            
                          <form className="Form" >
                            <input name="name" onChange={this.handleChange} value={this.state.name} className="noteTitle" type="text" placeholder="Note Title" /><br />
                              <p><textarea name={this.state.text} onChange={this.handleChange} className="noteContent" cols="60" rows="10" placeholder="Note Content"></textarea></p>
                                <Link to="/Save"><Button  type="submit" className="BTN btn btn-info">Save</Button></Link>
                          </form>  
                      </div>  
             </div>
           </div>               
        </div>
      );
    }
  }
  
  export default NewNote;