import React from "react";
import './index.css';

const UserForm = props => {
    return(
        <form className="form" action="#" onSubmit={props.submit}>
            Title: <input className="title-input" name="title" onChange={props.change} value={props.title} placeholder="Note Title" required/>
            Message: <textarea className="message-input" rows={30} name="textBody" onChange={props.change} value={props.textBody} placeholder="Note Content" required/>
            <button className="submit-button" type="submit">{props.buttonText}</button>
        </form>
    );
}
export default UserForm;