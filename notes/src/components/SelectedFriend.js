import React from 'react';

export default function SelectedFriend(props) {
  return (
    <div>
      <h4>{props.selected.name}</h4>
      <span onClick={() => props.handleShowFriend({})}> X </span>
      <div>{props.selected.email}</div>
      <div>{props.selected.age}</div>
      <button onClick={() => props.handleDeleteFriend()}>{`Delete ${
        props.selected.name
      }`}</button>
      <button onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.name
      }`}</button>
    </div>
  );
}
