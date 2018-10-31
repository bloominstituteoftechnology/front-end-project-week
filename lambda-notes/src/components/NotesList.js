import React from "react";
import { CSVLink } from "react-csv";
import axios from "axios";
import {
  LeftBar,
  StyledLink,
  ContainCards,
  NotesH2,
  CardList,
  TitleH1
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
    let A = [[ 'id','id', 'title', 'textbody']];
    let re = this.state.data;

    for (let item = 0; item < re.length; item++) {
      A.push([re[item]._id, re[item].title, re[item].textBody]);
    }
    // console.warn(A);
    for (let i = 0; i < A.length; ++i) {
      csvRow.push(A[i].join(','));
    }
    let csvString = csvRow.join('%0A');
    console.warn(csvString);

    let a = document.createElement('a');
    a.href='data:attachment/csv' + csvString;
    a.target = "_blank";
    a.download = "Notes.csv";
    document.body.appendChild(a);
    a.click();
  }

  render() {
    
    console.log(this.props.notes);
    // console.log(this.props.notes);
    return (
      <div>
        <LeftBar>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
          <div onClick={this.props.signOut}>Sign Out</div>
            {/* <CSVLink data={this.props.notes} filename={"notes.csv"}>
              Download me
            </CSVLink> */}
            <button onClick={() => {this.exportCsv()}}>Export</button>
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
