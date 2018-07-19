import React from 'react';
import { FlexDiv, Modal, FlexNotes, PrimaryButton } from '../StyledComponents/StyledComponents';
import styled from 'styled-components';
import {Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { deleteNote } from '../../Actions';

const FlexNotesMod = FlexNotes.extend`
flex-direction:row;
flex-wrap: nowrap;
justify-content: space-around;
width: 90%;
overflow: hidden;
`

const FlexDivMod = FlexDiv.extend`
width: 100%;
height 100%;
background-color: rgba(1,1,1, 0.5);
position: absolute;
z-index: 10;
top: 0;
left: 0;
`
const BigDeleteButton = PrimaryButton.extend`
background-color: red;
`

const DeleteModal = (props) => {
    const id = props.match.params.id;
    console.log ('id', id)
     let history = props.history;
    return (
       <FlexDivMod>
         <Modal>

          <FlexNotesMod>   <i className="fas fa-exclamation-circle fa-5x" datafatransform="grow-10" style={{color:'red'}}></i> <h2>Are you sure you want to Delete?</h2> </FlexNotesMod>
             <FlexNotesMod>
                <BigDeleteButton onClick={(e)=>{props.deleteNote(e, id, history)}}>DELETE</BigDeleteButton>
             <Link style={{textDecoration:'none', minWidth:'75px', width:'100%'}} to='/'><PrimaryButton>CANCEL</PrimaryButton></Link>
             </FlexNotesMod>
         </Modal>
       </FlexDivMod>
    );
};

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default withRouter(connect(mapStateToProps, { deleteNote })(DeleteModal));