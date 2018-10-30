import React from 'react';
// import PropTypes from 'prop-types';
import './CreateNew.css';



function CreateNew(props) {
// console.log(props.note.title);
    return (
      <div className="create-container">
      <h2> Create New Note </h2>
        <div className="title-form">
        <form>
            <label>Note Title</label>
            <br/>
            <input className="title1" 
                type ="text" 
                name="title" 
                value={props.note.title} 
                onChange={props.handleChange}/>
            <br/>
            <label>New Notes</label>
            <br/>
            <input className="comment" 
                type ="text" 
                name="textBody" 
                value ={props.note.textBody} 
                onChange={props.handleChange}/>
            <br/>
        <button className="savebutton" onClick={props.handleAddNewNote}><span>Save</span></button>
        </form>
        </div>
      </div>
    
    )
}

// CreateNew.propTypes = {
//     note: PropTypes.shape({
//         tags: PropTypes.arrayOf(PropTypes.string),
//         title: PropTypes.string,
//         textBody: PropTypes.string
//     }),
//         handleChange: PropTypes.func,

// }

export default CreateNew;