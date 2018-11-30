import React from "react";
import NoteView from "./NoteView";
import { NoteCard, NoteCardList, NoteCardTitle, NoteCardText} from './Styled';


const ListView = props => {
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

NoteView.defaultProps = {
  notes: []
};

export default ListView;
