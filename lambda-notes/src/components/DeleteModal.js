import React from "react";

const DeleteModal = props => {
  return (
    <div>
      <p>Are you sure you want to delete this?</p>
      <button>Delete</button>
      <button>No</button>
    </div>
  );
};

export default DeleteModal;
