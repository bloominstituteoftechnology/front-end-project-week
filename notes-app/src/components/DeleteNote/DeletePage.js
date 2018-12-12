import React from 'react';
import styled from 'styled-components';
import { Button } from '../CreateNote/CreateNoteForm';

const DeletePageView = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background: rgba(2,2,2,0.3);
`;

const Deleteblock = styled.div`
    width: 530px;
    height: 180px;
    margin: 290px auto;
    background: white;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const DBlockP = styled.p`
    text-align: center;
`;

const DeleteButton = styled(Button)`
    background: red;
    &:hover{
        color:red;
    }
`;

const DeletePage = props => {
  
    return (
        <DeletePageView>
            <Deleteblock>
                <DBlockP>Are you sure you want to delete this?</DBlockP>
                <div>
                    <DeleteButton onClick={props.deleteConfirm}>Delete</DeleteButton>
                    <Button onClick={()=> props.history.goBack()}>No</Button>
                </div>
            </Deleteblock>
        </DeletePageView>
    )
}

export default DeletePage;