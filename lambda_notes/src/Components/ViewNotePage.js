import React, { Component } from "react";
import axios from "axios";
import DeleteModalPage from './DeleteModalPage';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ViewNotesBox = styled.div`
  width: 100%;
  max-width: 665px;
  background: #f2f1f1;
  heght:;
`;
const NoteWrapper = styled.div`
  margin: 3.5%;
`;
const ModifyNoteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LinkToEdit = styled(Link)`
  color: #414242;
  cursor: pointer;
  margin: 5px;
  text-decoration: underline;
  font-weight: bold;
  :hover {
    color: #57b5bb;
  }
`;

const Delete = styled.div`
text-decoration: underline;
cursor: pointer;
font-weight: bold;
color: #414242;
margin-top: 5px;
:hover {
  color: #57b5bb;
}
`;

const NoteBodySection = styled.p`
  text-decoration: none;
  overflow-wrap: break-word;
  overflow
`;

const NoteTitleLine = styled.h5`
  font-size: 18px;
  text-decoration: none;
  overflow-wrap: break-word;
  overflow
`;


class ViewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      id: '',
      modal: false,
    }
    this.toggle = this.toggle.bind(this)
  }


  componentDidMount() {
    console.log('TESTcomponentDidMount.axios.get');
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then(res => { console.log('Logged resonse: ', res);
        this.setState({ textBody: res.data.textBody, title: res.data.title, id: res.data._id });
      })
      .catch(err => console.log(err));
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
    console.log('Test If I can toggle.this.setState');
    if (this.state.Modal === true) {
      return (this.props.history.push('/'));
    }
  }





  render() {
    return (
      <ViewNotesBox>
        <NoteWrapper>

          <ModifyNoteWrapper>

            <LinkToEdit to={`/note/edit/${this.state.id}`}> EDIT </LinkToEdit>

            <Delete onClick={this.toggle}>DELETE</Delete>

          </ModifyNoteWrapper>

          <NoteTitleLine>{this.state.title}</NoteTitleLine>

          <NoteBodySection>{this.state.textBody}</NoteBodySection>

        </NoteWrapper>

        <DeleteModalPage modal={this.state.modal} toggle={this.toggle} id={this.state.id} />

      </ViewNotesBox>

    );
  }
}

export default ViewNote;

