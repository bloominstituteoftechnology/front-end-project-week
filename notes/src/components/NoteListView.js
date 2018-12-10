import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// list view styled components

const NoteListViewContainer = styled.div`
  padding-top: 50px;
  padding-left: 40px;
`;

const NoteListHeader = styled.h2`
  display: flex;
  flex-direction: row;
  color: #4a494a;
  font-size: 2.4rem;
  margin-bottom: 30px;
  font-weight: bold;
`;

const NotePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NotePreview = styled(Link)`
  border: 1px solid #c0c0c0;
  background: white;
  margin: 0 20px 30px 0;
  width: 20%;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const NotePreviewTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  width: 100%;
  border-bottom: 1px solid #cacaca;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const NotePreviewBody = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  display: block;
  overflow: hidden;
  white-space: pre-line;
`;

class NoteListView extends Component {
  render() {
    return (
      <NoteListViewContainer>
        {this.props.loading ? (
          <NoteListHeader>Loading...</NoteListHeader>
        ) : (
          <NoteListHeader>Lambda Notes:</NoteListHeader>
        )}
        <NotePreviewContainer>
          {this.props.notes.map(note => (
            <NotePreview to={`/notes/${note._id}`} key={Math.random()}>
              <NotePreviewTitle>{note.title}</NotePreviewTitle>
              <NotePreviewBody>{note.textBody}</NotePreviewBody>
            </NotePreview>
          ))}
        </NotePreviewContainer>
      </NoteListViewContainer>
    );
  }
}

export default NoteListView;
