import React, { Component } from 'react';
import { deleteNote } from '../Actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { DangerBtn, BtnStyle, ModalText, ButtonWrap } from '../Styles/DeleteModalStyle';



class DeleteModal extends Component {

    state = {
        deleteMessage: '',
        open: false,
    }

    onOpenModal = () => {
        this.setState({ open: true, });
    };

    onCloseModal = () => {
        this.setState({ open: false, })
    };

    onDelete = (e) => {
        e.preventDefault();
        this.props.deleteNote(this.props.id);
         alert("Delete Successful");
    }

  render() {
    const { open } = this.state;
      return (
            <div>
                <div onClick={this.onOpenModal}>Delete</div>
                <Modal closeIconSize={0} open={open}  center>
                <ModalText>Are you sure you want to delete this?</ModalText>
                    <ButtonWrap>
                        <DangerBtn onClick={this.onDelete} onClickCapture={this.onCloseModal}>Delete</DangerBtn>
                        <BtnStyle onClick={this.onCloseModal}>No</BtnStyle>
                    </ButtonWrap>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps =(state)=> {
    return {
        notes: state.notes,
    }
}

export default withRouter(connect(mapStateToProps, { deleteNote } )( DeleteModal ))