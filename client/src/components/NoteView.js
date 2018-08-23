import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { SecondaryHeading, Button } from '../styles';

const NoteContainer = styled.div`
  max-width: 85rem;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

const NoteHeading = SecondaryHeading.extend`
  flex: 1;
  margin: 0;
`;

const TextContent = styled.div`
  white-space: pre-wrap;
  text-align: justify;
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited,
  &:active {
    color: inherit;
  }
  margin-right: 1rem;
`;

const ButtonLink = styled.button`
  font-size: inherit;
  font-family: inherit;
  text-decoration: underline;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  text-align: center;
  padding: 4rem 5rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
`;

const ModalText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const DangerButton = Button.extend`
  background-color: #f44336;

  &:not(:last-child) {
    margin: 0 1rem 0 0;
  }

  &:hover {
    background-color: #d32f2f;
  }
`;

const InfoButton = Button.extend`
  background-color: #00bcd4;
  margin: 0;

  &:hover {
    background-color: #0288d1;
  }
`;

class NoteView extends React.Component {
  state = {
    showModal: false,
  };

  render() {
    const {
      note: { _id: id, title, textBody },
      onDelete,
    } = this.props;
    return (
      <NoteContainer>
        <TopBar>
          <NoteHeading>{title}</NoteHeading>
          <StyledLink to={`/notes/${id}/edit`}>edit</StyledLink>
          <ButtonLink
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            delete
          </ButtonLink>
        </TopBar>
        <TextContent>
          <ReactMarkdown source={textBody} />
        </TextContent>
        {this.state.showModal && (
          <ModalContainer>
            <Modal>
              <ModalText>
                Are you sure you want to delete?
                <br /> This action is irreversible
              </ModalText>
              <div>
                <DangerButton onClick={onDelete}>Delete</DangerButton>
                <InfoButton onClick={() => this.setState({ showModal: false })}>
                  Cancel
                </InfoButton>
              </div>
            </Modal>
          </ModalContainer>
        )}
      </NoteContainer>
    );
  }
}

export default NoteView;
