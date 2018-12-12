import React from "react";
import './index.css';

const UserForm = props => {
    return(
        <form className="form" action="#" onSubmit={props.submit}>
            Title: <input className="title-input" name="title" onChange={props.change} value={props.title} required/>
            Message: <textarea className="message-input" rows={30} name="textBody" onChange={props.change} value={props.textBody} required/>
            <button className="submit-button" type="submit">{"Add Note"}</button>
        </form>
    );
}
export default UserForm;