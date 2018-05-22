import React from "react";

const NoteCard_ = props => {
  const { card } = props;
  return <div>{card.title}</div>;
};

export default NoteCard_;
