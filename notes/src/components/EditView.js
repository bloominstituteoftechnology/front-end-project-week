import React from "react";

const EditView = () => {
  return (
    <div>
      <h1>Edit Note:</h1>
      <form>
        {" "}
        <label>
          {" "}
          <input type="text" name="title" placeholder="Note Title" required />
        </label>{" "}
        <label>
          {" "}
          <input
            type="text"
            name="content"
            placeholder="Note Content"
            required
          />
        </label>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default EditView;
