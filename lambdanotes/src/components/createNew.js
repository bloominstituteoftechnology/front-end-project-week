import React, { Component } from 'react';
import '../components/CreateNew.css';



class CreateNew extends Component {
  render() {
    return (
      <div className="main-container">
      <h2> Create New Note </h2>
        <div className="title-form">
        <form>
            <input className="title" type ="text" value="New Title"/>
        </form>
        </div>
        <div className="comment-form">
        <form>
            <input className="comment" type ="text" value="New Notes"/>
        </form>
        <button className="savebutton"><span>Save</span></button>
        </div>
      </div>
    
    );
  }
}

export default CreateNew;