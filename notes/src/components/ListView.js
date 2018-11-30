import React from "react";
// import NoteView from "./NoteView";
import { NoteCard, NoteCardList, NoteCardTitle, NoteCardText} from './Styled';

// import { Link } from "react-router-dom";

const ListView = props => {
  return (
    <div className="Notes">
      <h2>Your Notes:</h2>

      <NoteCardList>
        {props.notes.map(note => {
          return (
            <NoteCard to ={`/note/&{note._id}`}
              // id=
              // {note.id}
              // title=
              // {note.title}
              // txt=
              // {note.textBody}
              // key=
              // {note.id}
              >
              <NoteCardTitle>{note.title}</NoteCardTitle> <NoteCardText>{note.textBody}</NoteCardText>
            </NoteCard>
          );
        })}
      </NoteCardList>
    </div>
  );
};

ListView.defaultProps = {
  notes: []
};

export default ListView;
