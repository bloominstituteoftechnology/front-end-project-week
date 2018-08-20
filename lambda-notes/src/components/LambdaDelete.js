import React, { Component } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.6);
`

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -70%);
  width: 450px;
  max-width: 100%;
  background: white;
  border-radius: 10px;
  border: 1px solid black;
  height: 150px;
`

const YesButton = styled.button`
    color: white;
    background: red;
    width: 150px;
    border: 0;
    height: 35px;
    margin-left: 35px;
`

const NoButton = styled.button`
    background: #2BC1C4;
    width: 150px;
    border: 0;
    height: 35px;
    margin-left: 35px;
    color: white;
`

const Header = styled.h2`
   margin-top: 40px;
   margin-left: 100px;
   font-size: 12px;
`

class LambdaDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.handleSelectNote(id);
    }

    deleteNote = () => {
        this.props.handleDeleteNote(this.props.match.params.id)
    }

    render() {
        return (
            <Modal>
            <ModalStyle>
                <Header>Are you sure you want to delete this?</Header>
                <YesButton onClick={this.deleteNote}>Yes</YesButton>
                <NoButton>No</NoButton>
            </ModalStyle>
            </Modal>
        )
    }
}

export default LambdaDelete;