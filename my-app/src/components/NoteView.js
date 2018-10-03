import React, { Fragment } from "react";
import axios from "axios";
import styled from "styled-components";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  handleDelete = () => {
    const id = this.props.match.params.id;
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    console.log(" render is running ");
    return (
      <NoteViewWrap>
        <LinkWrap>
          <Link>Edit</Link>
          <Link onSubmit={this.handleDelete}>Delete</Link>
        </LinkWrap>
        <ContentWrap>
          <h1>{this.state.note.title}</h1>
          <p>{this.state.note.textBody}</p>
        </ContentWrap>
      </NoteViewWrap>
    );
  }
}

const NoteViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5%;
  height: 500px;
  margin-left: 275px;
`;

const LinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Link = styled.a`
  padding: 6px 1.5%;
  font-weight: bold;
  font-size: 0.85rem;
  color: black;
`;

const ContentWrap = styled.div`
  margin-top: 20px;
  line-height: 24px;
`;

export default NoteView;
