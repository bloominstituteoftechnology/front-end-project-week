import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
`;
const ProfileP = styled.p`
    border-bottom: 1px solid black;
    padding:  0 0 20px;
    line-height: 2.5rem;
`;

const Profile = props => {
    
  
    return (
        <>
            <ProfileP><Label>Username</Label><br/> {localStorage.getItem('username')}</ProfileP>
            <ProfileP><Label>Password</Label> <br/>{localStorage.getItem('password')}</ProfileP>
            <ProfileP>you currently have <Label>{props.notes.length}</Label> notes</ProfileP>
        </>
    )
}

export default Profile;