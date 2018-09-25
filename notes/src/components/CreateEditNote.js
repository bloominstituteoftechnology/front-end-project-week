import React from "react";

export default function CreateEditNote(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (props.Updating) {
      props.handleUpdateNote();
    } else {
      props.handleAddNewNote(event);
    }
  }

  return (
    <div>
      <h2>{props.isUpdating ? "Update Avenger" : "Add New Avenger"}</h2>
      <form>
        <div className="group">
          <input
            type="text"
            value={props.avenger.name}
            name="name"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Name</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.avenger.nickname}
            name="nickname"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Nickname</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.avenger.description}
            name="description"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Description</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.avenger.thumbnail}
            name="thumbnail"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Thumbnail</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.avenger.img}
            name="img"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Img</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.avenger.movies.join(", ")}
            name="movies"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Movies (comma delimited list)</label>
        </div>
        <button className="material-button-raised" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
