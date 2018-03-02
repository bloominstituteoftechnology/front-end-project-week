import React from "react";

const NoteList = props => {
  const { notes, target, keyword, results } = props;

  return notes.map((note, i) => {
    let length = keyword.length;
    let tempKeyword = keyword.toLowerCase();
    let tempTitle = note.title.toLowerCase();
    if (results) {
      for (
        let j = tempTitle.indexOf(tempKeyword[0]);
        j < tempTitle.length;
        j = j++
      ) {
        if (tempKeyword === tempTitle.substring(j, j + length)) {
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
