import React from 'react';
// import PropTypes from 'prop-types';
import '../components/CreateNew.css';



const CreateNew = (props) => {
console.log(props.handleSubmit);
    return (
      <div className="main-container">
      <h2> Create New Note </h2>
        <div className="title-form">
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="notetitle">Note Title</label>
            <br/>
            <input className="title" 
            type ="text" 
            name="title" 
            value={props.note.title} 
            onChange={props.handleChange}/>
        {/* </div> */}
        {/* <div className="comment-form"> */}
            <br/>
            <label htmlFor="note">New Notes</label>
            <br/>
            <input className="comment" 
            type ="text" 
            name="textBody" 
            value ={props.note.textBody} 
            onChange={props.handleChange}/>
        <button className="savebutton"><span>Save</span></button>
        </form>
        </div>
      </div>
    
    );
};

// CreateNew.PropTypes = {
//     note: PropTypes.shape({
//         tags: PropTypes.arrayOf(PropTypes.string),
//         title: PropTypes.string,
//         textBody: PropTypes.string
//     })
// }

export default CreateNew;