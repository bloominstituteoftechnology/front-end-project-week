import React, { Component } from "react";
import "./index.css";
import axios from 'axios';

class DeleteNote extends Component {
  state={
    response:''
  }
  getNotes = () => {
    console.log('hi');
  
  axios
    .delete('http://localhost:8000/notes/:id')
    .then(response => this.setState({response: response.data}))
    .catch(error => console.log(error));
  }
  
  componentDidMount(){
    this.getNotes();
    
  }
  render() {
    let toggle = this.props.toggle;
    return (
      <div className={toggle ? "delete_wrapper" : "hidden"}>
        <div>
          <h4>Are you sure you want to delete this?</h4>
        </div>
        <div classname="modal_wrapper">
          <div className="button_red" onClick={this.props.showModal}>DELETE</div>
          <div className="button" onClick={this.props.showModal}>NO</div>
        </div>
      </div>
    );
  }
}

export default DeleteNote;
