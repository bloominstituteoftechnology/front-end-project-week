import { SortableContainer } from "react-sortable-hoc";
import { NoteList } from "../styled/NotesList";
import SortableItem from "./SortableItem";
import React from "react";

const SortableList = SortableContainer(({ notes, history }) => {
  return (
    <NoteList>
      {notes.map((note, index) => {
        return (
          <SortableItem
            key={note._id}
            note={note}
            index={index}
            value={index}
            history={history}
          />
        );
      })}
    </NoteList>
  );
});

export default SortableList;
