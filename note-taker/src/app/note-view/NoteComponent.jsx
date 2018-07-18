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
  border: none;
  cursor: pointer;
`;
class NoteComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      const id = this.props.match.params.id;
      this.props.fetchNote(id);
      
  }
  render() {
    return (
      <div>
        <OptionsContainer>
          <Link to = '/edit-view'>
          <OptionsBtn>edit</OptionsBtn>
          </Link>
          <OptionsBtn>delete</OptionsBtn>
        </OptionsContainer>
        <DeleteModal />
        <HeadingTitle>{this.props.note.title}</HeadingTitle>
        <p>{this.props.note.textBody}</p>
      </div>
    );
  }
}

export default NoteComponent;
