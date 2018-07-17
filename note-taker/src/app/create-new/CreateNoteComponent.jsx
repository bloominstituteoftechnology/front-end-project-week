import React from "react";
import "bulma/css/bulma.css";
import HeadingTitle from "../common/Titles/HeadingTitle";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";
import { Link } from 'react-router-dom';
const CreateNoteComponent = props => {
  return (
    <div>
      <HeadingTitle>Create new note:</HeadingTitle>
      <form onSubmit = {e => {
          e.preventDefault();
          }}>
        <div className="field">
          <div className="control">
            <input
              className="input is-large"
              type="text"
              placeholder="Note Title"
            />
          </div>
        </div>
        <div className = "field">
        <textarea className="textarea" placeholder="Note Content" rows="10"></textarea>
        </div>
        <Link to = '/'>
        <GeneralBtn width = "15rem">Save</GeneralBtn>
        </Link>
      </form>
    </div>
  );
};

export default CreateNoteComponent;
