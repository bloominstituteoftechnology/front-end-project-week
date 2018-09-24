import React, { Component } from 'react';
import '../components/CreateNew.css';



class CreateNew extends Component {
  render() {
    return (
      <div className="main-container">
      <h2> Create New Note </h2>
        <div className="title-form">
        <form>
            <input className="title" type ="text" newCardTitle="title" value="New Title"/>
        </form>
        </div>
        <div className="comment-form">
        <form>
            <input className="comment"type ="text" newCardComment="comment" value="New Notes"/>
        </form>
        </div>
      </div>
    
    );
  }
}

export default CreateNew;