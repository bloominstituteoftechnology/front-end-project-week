import React from "react";

const DeleteModal = props => {
  const id = props.match.params.id;
  return (
    <div className="container">
      <div className="delete-question">
        <h3> Are you sure you want to delete this? {id}</h3>
      </div>
      <div className="delete">
        <p>Delete</p>
      </div>
      <div className="do-not-delete">
        {" "}
        <p>No</p>
      </div>
    </div>
  );
};

export default DeleteModal;
