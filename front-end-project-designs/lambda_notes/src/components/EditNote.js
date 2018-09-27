import  React from 'react';
import './Note.css';

const EditNote = props =>{

    return (
        <div className="create-edit-form">
            <h1>Edit Note:</h1>
            {/* {console.log(props)} */}
            {/* <form> */}
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
                <button className="save-input-button"
                        onClick={   //() => 
                             props.handleEditNote
                            }>Save</button>
            {/* </form> */}
          
        </div>
      
    )
}

export default EditNote;