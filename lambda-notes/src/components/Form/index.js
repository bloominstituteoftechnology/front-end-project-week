import React from "react";

const Form = props => {
    const heading = "Form Heading";
    const buttonName = "Save";

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