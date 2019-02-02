import React from "react";
import "./styles.css";


const Form = (props) => {
    // LOGIC TO ALLOW 'DISPLAY' AND 'BUTTON' TEXT TO BE DYNAMIC
    const heading = props.type === "new" ? "Create New Note" : "Edit Note"
    const buttonName = props.type === "new" ? "Save" : "Update";

    return (
        <div className="form-container">
            <h2 className="form-header">
                {heading}
            </h2>
            <form className="newNote-container">
                <input
                    className="note-title"
                    type="text"
                    name="title"
                    maxLength="35"
                    placeholder="Note Title"
                    value={props.title}
                    onChange={props.recognizeInputChange}
                />
                <textarea
                    className="note-content"
                    type="text"
                    name="textBody"
                    placeholder="Your Note Here"
                    value={props.textBody}
                    onChange={props.recognizeInputChange}
                />
                <button 
                    className="button"
                    onClick={props.recognizeFormSubmit}>
                    {buttonName}
                </button>
            </form>
        </div>
    );
};


export default Form;