import React from 'react';
// import PropTypes from 'prop-types';
import './CreateNew.css';



function CreateNew(props) {
// console.log(props.note.title);
    return (
      <div className="create-container">
      <h2 className="createheader"> Create New Note </h2>
        <div className="title-form">
        <form>
        <div className="title1">
            <label>Note Title</label>
        </div>
            <br/>
            <input className="title1" 
                type ="text" 
                name="name" 
                defaultValue={props.note.name} 
                onChange={props.handleChange}/>
            <br/>
            <br/>
            <label>New Notes</label>
            <br/>
            <br/>
            <input className="comment" 
                type ="text" 
                name="description" 
                defautValue ={props.note.description} 
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
//         description: PropTypes.string
//     }),
//         handleChange: PropTypes.func,

// }

export default CreateNew;