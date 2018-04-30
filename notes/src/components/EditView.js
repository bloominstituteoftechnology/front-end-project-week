import React from "react";
import "./css/EditView.css";

const EditView = () => {
  return (
    <div className="editbox">
      <div>
        <h1>Edit Note:</h1>
      </div>
      <form className="editbox__ele--form">
        <div>
          <label>
            <input
              className="editbox__ele--title"
              type="text"
              name="title"
              placeholder="Note Title"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              className="editbox__ele--content"
              type="text"
              name="content"
              placeholder="Note Content"
              required
            />
          </label>
        </div>
        <div>
          <button className="editbox__ele--button" type="submit" value="Update">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditView;

// Nice! I like the way I editbox has the proper width I want
