import React, { Component } from 'react';
import '../components/CreateNew.css';



class CreateNew extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('https://killer-notes.herokuapp.com/note/edit/id', {
            method: 'POST',
            body: data,
        });
    }
  render() {
    //   console.log(data);
    return (
      <div className="main-container">
      <h2> Create New Note </h2>
        <div className="title-form">
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="notetitle">Note Title</label>
            <br/>
            <input className="title" type ="text" name="New Title" id="notetitle"/>
        {/* </div> */}
        {/* <div className="comment-form"> */}
            <br/>
            <label htmlFor="note">New Notes</label>
            <br/>
            <input className="comment" type ="text" name="New Notes" id="notetitle"/>
        <button className="savebutton"><span>Save</span></button>
        </form>
        </div>
      </div>
    
    );
  }
}

export default CreateNew;