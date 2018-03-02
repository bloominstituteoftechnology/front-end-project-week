import React from "react";

const NoteList = props => {
  const { notes, target, keyword, results } = props;

  return notes.map((note, i) => {
    let length = keyword.length;
    let tempKeyword = keyword.toLowerCase();
    let tempTitle = note.title.toLowerCase();
    if (results) {
      if (length === 1 && tempTitle.includes(tempKeyword)) {
        return (
          <div className="note" onClick={() => target(i)}>
            <h1 className="noteTitle">{note.title}</h1>
            <p className="noteContent">{note.content}</p>
          </div>
        );
      }
      for (let i = 0; i < tempTitle.length; i = i++) {
        if (tempKeyword === tempTitle.substring(i, i + length)) {
          return (
            <div className="note" onClick={() => target(i)}>
              <h1 className="noteTitle">{note.title}</h1>
              <p className="noteContent">{note.content}</p>
            </div>
          );
        }
        return null;
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
