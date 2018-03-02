import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteNote} from '../actions';
import {Modal} from 'react-bootstrap';

class DeleteNote extends Component {
    state = {
        show: false,
        showHideModal:'hide-modal',
    };

    showHideModal = (className) => {
        this.setState({ showHideModal: className });
    };

    handleDeleteFromModal() {
        this.props.deleteNote(this.props.firebaseKey.key);
    };

    render() {
        return (
            <DeleteContainer>
                <span className={'sub-links'} onClick={()=>{this.showHideModal('show-modal')}}>delete</span>

                <div className={this.state.showHideModal} id={'action-modal'} >
                    <Modal.Dialog>
                        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                        <div className={'actions-box'}>
                            <div onClick={()=>{this.handleDeleteFromModal()}} className={"dialog-btn btn-red"}>Delete</div>
                            <div onClick={()=>{this.showHideModal('hide-modal')}} className={"dialog-btn btn-grey"}>No</div>
                        </div>
                    </Modal.Dialog>
                </div>
            </DeleteContainer>
        )}
}

export default connect(null, {deleteNote})(DeleteNote);

const DeleteContainer = styled.span`

    text-align:center;
        
    .hide-modal{
        display:none;
    }
    
    .show-modal{
        display:inline;
    }   
        
    .modal-content{
        border:1px solid #323332;
        border-radius: 0px;
        padding-top:30px;
        padding-bottom:40px;
        background-color:#FBFAFB;
    }
    .modal-body{
        border:0px solid #323332;
        margin-bottom:10px;
    }
    
    .actions-box{
        display: flex;
        justify-content:center;
    }
    .dialog-btn{
        border:1px solid #797979;
        padding:8px 25px 8px 25px;
        width:200px;
        margin-left:10px;
        margin-right:10px;
        color:white;
        box-shadow: 0.5px 1px #797979;
    }
    .dialog-btn:hover{
        cursor: pointer;
        box-shadow: 0px 0px #999999;
    }
    .btn-red{
        background-color:red;
    }
    .btn-grey{
        background-color:#28B6B8;
    }
    
`;