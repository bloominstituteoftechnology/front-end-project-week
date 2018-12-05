import React, { Component } from "react";

import {
  ListViewWrapper,
  NotesViewWrapper,
  NotesListTitle,
  NoteCard,
  NoteCardLink,
  NoteCardList,
  NoteCardTitle,
  NoteCardText
} from "./Styled";
import axios from "axios";

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to get api"));
  }

  render() {
    return (
      <ListViewWrapper>
        <NotesViewWrapper>
          <NotesListTitle>Your Notes:</NotesListTitle>

          <NoteCardList>
            {this.state.notes.map(note => {
              return (
                <NoteCardLink to={`/note/${note._id}`} key={note._id}>
                  <NoteCard>
                    <NoteCardTitle>{note.title}</NoteCardTitle>
                    <NoteCardText>{note.textBody}</NoteCardText>
                  </NoteCard>
                </NoteCardLink>
              );
            })}
          </NoteCardList>
        </NotesViewWrapper>
      </ListViewWrapper>
    );
  }
}

export default ListView;
