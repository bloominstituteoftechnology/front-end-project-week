import { HeaderWrap, WrappedText } from "../styled/SmallNote";
import React from "react";

const SortableItem = ({ note }) => {
  return (
    <>
      <HeaderWrap>
        <h2>{note.title}</h2>
      </HeaderWrap>
      <WrappedText line={5} truncateText="…" text={note.textBody} />
    </>
  );
};

export default SortableItem;
