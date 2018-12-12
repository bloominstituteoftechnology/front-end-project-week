import React from "react";
import styled from "styled-components";
import EditDeleteLinks from "./EditDeleteLinks";
import DeleteModal from "../DeleteModal/DeleteModal";

import ContentHeading from "../ContentHeading/ContentHeading";

const NoteViewWrapper = styled.div`
  width: 610px;
  position: relative;
  top: 0;
  margin: 0 auto;
  margin-top: 7rem;
`;

const ContentParagraph = styled.p``;

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      currentNote: this.props.content.find(
        x => x._id === this.props.match.params._id
      )
    };
  }

  ShowModal = () => {
    console.log("SHOW MODAL CALLED");
    console.log("PREVIOUS STATE", this.state);
    this.setState({ showDeleteModal: true });
    console.log("POST STATE", this.state);
  };

  HideModal = () => {
    console.log("HIDE MODAL CALLED");
    console.log("PREVIOUS STATE", this.state);
    this.setState({ showDeleteModal: false });
    console.log("NEXT STATE", this.state);
  };

  render() {
    return (
      <NoteViewWrapper>
        <EditDeleteLinks
          currentNote={this.state.currentNote}
          showModal={this.ShowModal}
        />
        <ContentHeading message={this.state.currentNote.title} />
        <ContentParagraph>{this.state.currentNote.textBody}</ContentParagraph>
        {this.state.showDeleteModal ? (
          <DeleteModal
            currentNote={this.state.currentNote}
            hideModal={this.HideModal}
            delHandler={this.props.delHandler}
          />
        ) : null}
      </NoteViewWrapper>
    );
  }
}

export default NoteView;
