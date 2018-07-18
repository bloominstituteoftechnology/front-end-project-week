import React from "react";
import HeadingTitle from "../common/Titles/HeadingTitle";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/custom-props.css';
import DeleteModal from "./DeleteModal";
const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  & > * {
  margin: 0 24px 0 0;
  }
`;
const OptionsBtn = styled.button`
  background: var(--main-bg);
  text-decoration: underline;
  outline-color: var(--main-bg);
  color: var(--main-font-color);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalActive: false,
    }
  }
  componentDidMount() {
      const id = this.props.match.params.id;
      this.props.fetchNote(id);
      
  }
  triggerDeleteModal = () => {
    this.setState({ deleteModalActive: !this.state.deleteModalActive })
  }
  render() {
    const id = this.props.match.params.id;
    
    return (
      <div>
        <OptionsContainer>

          <Link to = {`/${id}/edit-view`}>
          <OptionsBtn>edit</OptionsBtn>
          </Link>

          <OptionsBtn onClick = {this.triggerDeleteModal}>delete</OptionsBtn>

        </OptionsContainer>

        <DeleteModal 
        noteDeletionHandler = {this.props.noteDeletion} 
        fetchAllNotesHandler = {this.props.fetchAllNotes}
        deleteModalActive = {this.state.deleteModalActive} 
        deleteModalHandler = {this.triggerDeleteModal} 
        id = {id}/>

        <HeadingTitle>{this.props.note.title}</HeadingTitle>
        <p>{this.props.note.textBody}</p>
      </div>
    );
  }
}

export default NoteComponent;
