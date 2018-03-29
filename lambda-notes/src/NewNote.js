import React from 'react';
import { Button } from 'reactstrap';
import Buttons  from './Buttons';
import './NewNote.css';
import './Buttons.css';
import Notes from './Notes';
import { Fade } from 'reactstrap';

class NewNote extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      text: '',
      id: 0
    };
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);

    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleAddTodoItem(e) {
    e.preventDefault();
    this.state.notes.push(this.state);
    e.target.reset();
    this.setState({
      title: '',
      text: '',
      id: 0
    }    
    )
  }

  toggle() {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
  }

  componentDidMount() {
    this.setState({ notes: Notes });
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
                          <form className="Form" onSubmit={this.handleAddTodoItem} >
                            <input name="title" onChange={this.handleChange} className="noteTitle" type="text" placeholder="Note Title" /><br />
                              <p><textarea name="text" onChange={this.handleChange}  className="noteContent" cols="60" rows="10" placeholder="Note Content"></textarea></p>
                              <Fade in={this.state.fadeIn} tag="h6" className="faded mt-2">
                                  Your Note Has Been Created
                              </Fade>
                                <Button onClick={this.toggle} type="submit" className="BTN btn btn-info">Save</Button>
                          </form>  
                      </div>  
             </div>
           </div>               
        </div>
      );
    }
  }
  
  export default NewNote;