import React from "react";
import "./index.css";

const Form = props => {
    const heading = props.type === "new" ? 
        "Create New Note" : "Edit Note:";
    const buttonName = props.type === "new" ? 
        "Save" : "Update";

    return (
        <div className="create-new-view">
            <h2>{heading}</h2>
            <input
                type="text"
                name="title"
                maxLength="20"
                placeholder="Note Title"
                value={props.title}
                onChange={props.handleInputChange}
            />
            <textarea
                type="text"
                name="textBody"
                placeholder="Note Content"
                value={props.textBody}
                onChange={props.handleInputChange}
            />
            <button onClick={props.handleFormSubmit}>
                {buttonName}
            </button>
        </div>
    );
}

export default Form;