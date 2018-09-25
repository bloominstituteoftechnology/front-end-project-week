import  React from 'react';
import './Note.css';

const CreateNote = props =>{
    return (
        <div className="create-update-form">
            <h1>Create New Note:</h1>
            {/* {console.log(props)} */}
            <form>
                <input  type="text"
                        className="title-input"
                        name="title"
                        value={props.note.title}
                        onChange={props.handleInput}/>
                <input  type="text"
                        className="textBody-input"
                        name="textBody"
                        value={props.note.textBody}
                        onChange={props.handleInput}/>
                <button className="create-submit-button"
                        onClick={props.handleAddNewNote}>Save</button>
            </form>
          
        </div>
      
    )
}

export default CreateNote;