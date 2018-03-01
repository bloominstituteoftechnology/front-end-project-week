import React from "react";

const NoteList = props => {
  const notes = props.notes;
  const target = props.target;
  const keyword = props.keyword;
  const results = props.results;

  return notes.map((note, i) => {
    let tempKeyword = keyword.toLowerCase();
    let tempTitle = note.title.toLowerCase();
    if (results) {
      if (
        tempTitle.includes(
          tempKeyword.split("").map(e => {
            if (tempKeyword.length === 1) return e;
            if (keyword === tempTitle.substring(0, tempKeyword.length - 1))
              return e;
          })
        )
      ) {
        return (
          <div className="note" key={i} onClick={() => target(i)}>
            <h1 className="noteTitle">{note.title}</h1>
            <p className="noteContent">{note.content}</p>
          </div>
        );
      }
      return null;
    }
    return (
      <div className="note" key={i} onClick={() => target(i)}>
        <h1 className="noteTitle">{note.title}</h1>
        <p className="noteContent">{note.content}</p>
      </div>
    );
  });
};

export default NoteList;
