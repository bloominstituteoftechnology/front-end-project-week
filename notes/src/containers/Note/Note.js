import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import {deleteNote} from '../../actions/noteActions'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
`;

const NoteCard = styled.div`
  flex: 1;
  width: 250px;
  height: 310px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 15px 1px Gainsboro;

  h1 {
    white-space: nowrap;
    font-size: 24px;
    color: black;
    margin: 10px 10px;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    overflow: hidden;
    line-height: 30px;
    margin: 0px 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
  hr {
    width:  90%;
  }
`;

const Note = ({ note }) => {
  return (
    <Container>
      <Link
        to={`notes/${note.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
      <NoteCard>
          <h1>
            {note.title}

        </h1>
        <hr />
        <p>{note.textBody}</p>

        </NoteCard>
      </Link>
    </Container>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Note);
