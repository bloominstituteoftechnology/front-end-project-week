import React from "react";
import axios from "axios";
import {
  LeftBar,
  StyledLink,
  ContainCards,
  NotesH2,
  CardList,
  TitleH1,
  ExportBtn,
  SignOut
} from "../Styles";

import NoteCard from "./NoteCard";

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.log(error));
  }

  exportCsv() {
    let csvRow = [];
    let A = [["id", "id", "title", "textbody"]];
    let re = this.state.data;

    for (let item = 0; item < re.length; item++) {
      A.push([re[item]._id, re[item].title, re[item].textBody]);
    }
    for (let i = 0; i < A.length; ++i) {
      csvRow.push(A[i].join(","));
    }
    let csvString = csvRow.join("%0A");
    let a = document.createElement("a");
    a.href = "data:attachment/csv" + csvString;
    a.target = "_blank";
    a.download = "Notes.csv";
    document.body.appendChild(a);
    a.click();
  }

  render() {
    return (
      <div>
        <LeftBar>
          <SignOut onClick={this.props.signOut}>Sign Out</SignOut>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
          <ExportBtn
            onClick={() => {
              this.exportCsv();
            }}
          >
            Export
          </ExportBtn>
        </LeftBar>
        <CardList>
          <NotesH2>Your Notes:</NotesH2>
          <ContainCards>
            {this.props.notes.map(note => (
              <NoteCard key={note._id} note={note} />
            ))}
          </ContainCards>
        </CardList>
      </div>
    );
  }
}

export default NotesList;
