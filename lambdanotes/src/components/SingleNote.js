import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import ReactMarkdown from 'react-markdown';

const Wrapper = styled.div`
    background-color: #f2f1f2;
    width: 75%;
    padding: 25px 0 70px 2.4em;
`;

const NoteHeading = styled.h3`
    font-weight: bold;
    font-size: 2em;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledLink = styled(Link)`
    color: #000;
    cursor: pointer;
    margin: 0 1em 1em 1em;
    font-size: 1.5em;
    font-weight: bold;
`;

const StyledModalBody = styled(ModalBody)`
    padding: 4em 3em 4em 6em;
    // font-size: 2.1em;
`;

const StyledModal = styled(Modal)`
    margin: 100px auto;
`;

const DeleteButton = styled.button`
    border: none;
    background: none;
    color: #000;
    font-weight: bold;
    font-size: 1.5em;
    margin: 0 1em 1.3em 0em;
    cursor: pointer;
`;

const StyledButton = styled(Button)`
    padding: 0.1em 2em;
    font-size: 1em;
    font-weight: bold;
    border-radius: 0;
    margin: 1em;
`;

const CancelButton = styled.button`
    background-color: #00b9bc;
    color: #fff;
    padding: 0.1em 3em;
    font-size: 1em;
    font-weight: bold;
    border-radius: 0;
    cursor: pointer;
    border: none;
`;

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    }

    handleDelete = (id) => {
        this.toggleModal();
        this.props.deleteNote(id);
        this.props.history.push("/notes");
    }

    render() {
        const NoteId = this.props.match.params.id;
        const note = this.props.notes.find(item => item.id === NoteId);
        
        return <Wrapper>
            <LinksContainer>
              <StyledLink to={`/edit/${note.id}`}>edit</StyledLink>
              <DeleteButton onClick={() => this.toggleModal()}>
                delete
              </DeleteButton>
              {this.state.modal ? <StyledModal isOpen={this.state.modal}>
                  <StyledModalBody>
                    Are you sure you want to delete this?
                    <Link to="/notes" onClick={() => this.handleDelete(NoteId)}>
                      <StyledButton color="danger">Delete</StyledButton>
                    </Link>
                    <CancelButton color="secondary" onClick={() => this.toggleModal()}>
                      No
                    </CancelButton>
                  </StyledModalBody>
                </StyledModal> : null}
            </LinksContainer>
            <NoteHeading>{note.title}</NoteHeading>
            <ReactMarkdown source={note.text} />
          </Wrapper>;
    }
}

export default SingleNote;