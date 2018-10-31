import React, { Component } from "react";

export default function SearchBar(props) {
  return (
    <div>
      <form onChange={props.handleChange} onSubmit={props.searchNotes}>
        <input type="text" placeholder="Search" name="searchNotes" />
      </form>
    </div>
  );
}
