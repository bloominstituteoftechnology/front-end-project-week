import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ActionsDiv = styled.div`
    display:flex;
    justify-content:flex-end;
`

const WrapperDiv = styled.div`
    margin-top:10px;
    border:1px solid #CECECE;
    display:flex;
`

const NavSection = styled.div`
    background-color:#D3D2D3;
    width:25%;
    border:1px solid #CECECE;

`
const NoteSection = styled.div`
    width:75%;
    background-color: #F2F1F2;
`
const NavButton = styled.div`
    background-color:#2FB8BC;
    width:150px;
    height:35px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`
class EditNoteContainer extends React.Component{
    render(){
        return(
            <WrapperDiv>

                <NavSection>
                    <p>Lambda Notes</p>
                    <Link to="/AddNote"><NavButton>
                        <p>+ Create New Note</p>
                    </NavButton></Link>
                </NavSection>
                <NoteSection>
                    <ActionsDiv>
                        <Link to='/edit'><p>Edit</p></Link>   
                        <Link to='/edit'><p>Delete</p></Link>   
                    </ActionsDiv>

                </NoteSection>




            </WrapperDiv>
        )
    }
}

export default EditNoteContainer