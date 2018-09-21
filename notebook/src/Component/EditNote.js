import React, { Component } from "react";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";

const EditNote = props => {
  return (
    <form
      onSubmit={event =>
        props.handleEdit(event, props.match.params.id, props.history.push)
      }
    >
      <FormGroup>
        <Input
          type="textarea"
          name="title"
          placeholder="Note Title"
          onChange={props.changeNote}
          value={props.title}
        />
      </FormGroup>
      <FormGroup>
        <Input
          className="note-content-input"
          type="textarea"
          name="textBody"
          placeholder="Note Content"
          onChange={props.changeNote}
          value={props.textBody}
        />
      </FormGroup>
      <button>Save</button>
    </form>
  );
};

export default EditNote;
