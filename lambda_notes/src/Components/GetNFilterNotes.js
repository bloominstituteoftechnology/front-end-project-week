import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

{/*}

const AllNotesBox = styled.div`
  width: 665px;
  display: flex;
  flex-wrap: wrap;
`;

const ViewListBox = styled.div`
  background: #f2f1f2;
  width: 100%;
  max-height: 1000px;
  overflow-y: scroll;
`;
const ViewNotesBox = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 50px;
`;

const NoteCardLink = styled(Link)`
  color: rgb (41, 43, 43);
`;

const NotesListHeader = styled.h2`
  color: #414242;
`;

const EachNoteCard = styled.div`
  margin: 10px 10px;
  background: white;
  width: 192px;
  height: 200px;
  padding: 5px;
  overflow: hidden;
  overflow-wrap: break-word;
  border: 2px solid #c5c5c7;
  color: black;
  cursor: pointer;
  :hover {
    border: 4px solid darkgray;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
  }
`;

const EachNoteText = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: darkgray;
`;

const EachNoteTitle = styled.h3`
  color: black;
`;
*/}

class GetNFilterNotes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, 'failed to get api'));
  }

  render() {
    return (
      {/*<ViewListBox>
        <ViewNotesBox>
          <NotesListHeader>Your Notes:</NotesListHeader>
          <Form>

           {/*} <Form
              onSubmit={
                this.addNewNote}
            >
              <TitleInput
                type='text'
                name="title"
                placeholder='  Note Title'
                value={this.state.title}
                onChange={this.handleChange}
              />
              <ContentInput
                type='text'
                name="textBody"
                placeholder='  Note Content'
                value={this.state.textBody}
                onChange={this.handleChange}
              />
              <Btn type="submit">Save</Btn>

            </Form> */}
          
          </Form>

          <AllNotesBox>
    {/*const thisArray = this.state.notes.map*/}
            // {this.state.notes.map(eachNote => {
            //   return (
            //     <NoteCardLink to={`/note/${eachNote._id}`} key={eachNote._id}>
            //       <EachNoteCard>
            //         <EachNoteTitle>{eachNote.title}</EachNoteTitle>
            //         <EachNoteText>{eachNote.textBody}</EachNoteText>
            //       </EachNoteCard>
            //     </NoteCardLink>
            //   );
            // })}
      //     </AllNotesBox>
      //     </ViewNotesBox>*/}
      // </ViewListBox>
    );
  }
}

export default GetNFilterNotes;
