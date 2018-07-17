import React from "react";
import "bulma/css/bulma.css";
import HeadingTitle from "../common/Titles/HeadingTitle";
import GeneralBtn from "../common/GeneralBtn/GeneralBtn";

const CreateNoteComponent = props => {
  return (
    <div>
      <HeadingTitle>Create new note:</HeadingTitle>
      <form>
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
        <GeneralBtn width = "15rem">Save</GeneralBtn>
      </form>
    </div>
  );
};

export default CreateNoteComponent;
