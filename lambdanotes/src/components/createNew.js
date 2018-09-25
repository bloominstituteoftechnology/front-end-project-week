import React from 'react';
import '../components/CreateNew.css';



const CreateNew = (props) => {
console.log(props.notes);
    return (
      <div className="main-container">
      <h2> Create New Note </h2>
        <div className="title-form">
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="notetitle">Note Title</label>
            <br/>
            <input className="title" type ="text" name="title" value={props.value}/>
        {/* </div> */}
        {/* <div className="comment-form"> */}
            <br/>
            <label htmlFor="note">New Notes</label>
            <br/>
            <input className="comment" type ="text" name="note" value ={props.value} />
        <button className="savebutton"><span>Save</span></button>
        </form>
        </div>
      </div>
    
    );
};

export default CreateNew;