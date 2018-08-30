import React, { Component } from "react";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

const EditNote = props => {
    console.log(props.title)
    return (
      

      <form onSubmit="">
        <FormGroup>
          <Input
            type="textarea"
            name="title"
            placeholder={props.title}
            onChange={props.handleChange}
            value={props.title}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="note-content-input"
            type="textarea"
            name="textBody"
            placeholder={props.textBody}
            onChange={props.handleChange}
            value={props.textBody}
          />
        </FormGroup>
        <Link to={"/"}>
          <button onClick={props.handleEdit}>Save</button>
        </Link>
      </form>
    );
  }
export default EditNote;
