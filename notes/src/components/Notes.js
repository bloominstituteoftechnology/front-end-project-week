import React from "react";
import Note from "./Note";
import { NoteCard, NoteCardList, NoteCardTitle, NoteCardText} from './Styled';


const Notes = props => {
  return (
    <div className="Notes">
      <h2>Your Notes:</h2>
      <NoteCardList>
        {props.notes.map(note => {
          return (
            <NoteCard
              id=
              {note.id}
              title=
              {note.title}
              txt=
              {note.textBody}
              key=
              {note.id}
              deleteNote = {props.deleteNote}
              editNote = {props.editNote}>
              <NoteCardTitle>{note.title}</NoteCardTitle> <NoteCardText>{note.textBody}</NoteCardText>
            </NoteCard>
          );
        })}
      </NoteCardList>
    </div>
  );
};

Note.defaultProps = {
  notes: []
};

export default Notes;
