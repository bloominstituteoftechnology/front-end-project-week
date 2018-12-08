import { SortableElement } from "react-sortable-hoc";
import { NoteWrapper, HeaderWrap, WrappedText } from "../styled/SmallNote";
import React from "react";

const SortableItem = SortableElement(({ note, history }) => {
  console.log(history);
  return (
    <NoteWrapper
      key={note._id}
      onClick={() => history.push(`/notes/${note._id}`)}
    >
      <HeaderWrap>
        <h2>{note.title}</h2>
      </HeaderWrap>
      <WrappedText line={5} truncateText="…" text={note.textBody} />
    </NoteWrapper>
  );
});

export default SortableItem;
