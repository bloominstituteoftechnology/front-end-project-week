import React, { Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };
  }

  handleDelete = () => {
    const id = this.props.match.params.id;
    axios.delete(`http://localhost:3333/dashboard/${id}`).then(res => {
      this.setState(() => ({ notes: res.data }));
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:3333/dashboard/${id}`)
      .then(response => {
        console.log("I'm logged", response);
        this.setState({ note: response.data[0] });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  render() {
    console.log(" render is running ");
    return (
      <NoteViewWrap>
        <LinkWrap>
          <Link>
            {" "}
            <NavLink
              to={`/edit-view/${this.props.match.params.id}`}
              //   onClick={() => props.editNote(note.id)}
            >
              edit
            </NavLink>
            {/* <Link to="/dashboard">
              <button class="delete" aria-label="close" />
            </Link> */}
          </Link>
          <Link>
            <NavLink to="/list-view" onClick={this.handleDelete}>
              delete
            </NavLink>
          </Link>
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
