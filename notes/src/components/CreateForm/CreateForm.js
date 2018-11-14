import React from 'react';

import './createform.css';

class CreateForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      text: '',
    }
  }

  inputHandler= (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.createNote(this.state.title, this.state.text);
    this.setState({ title: '', text: '' })
  }
    render() {
      return (
        <div className="createForm">
         <form onSubmit={this.submitHandler} >
           <input type="text" placeholder="Note Title" className="titleField" name="title" value={this.state.title} onChange={this.inputHandler}></input>
           <input type="text" placeholder="Jot down a note" className="textField" name="text" value={this.state.text} onChange={this.inputHandler}></input>
           <input type="submit" value="submit"></input>      
         </form>

        </div>
      );
    }
  }
  
  export default CreateForm;