import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { user } from '../../data';
console.log(user);
const FlexDiv = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;

 text-decoration: none;

 height: 48px;
`
const SmallProfileImage = styled.img`

padding-right: 15px;
border-radius: 30%;
`
const WelcomeMessage = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 16px;
text-align: left;
padding: 0;
color: white;
margin: 0;  
 text-decoration: none;
`

const SubMessage = styled.p `
font-family: 'Roboto', sans-serif;
font-size: 12px;
text-align: left;
margin: 0;
padding: 0;
color: grey;

`

const Stacker = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
height: 20px;
`



const UserMiniCard = (props) => {
    return (
          <FlexDiv>
          {(user) && <SmallProfileImage src={user.picture.thumbnail} />} 
          <Stacker>
           <WelcomeMessage>Welcome, {user.name.first}!</WelcomeMessage>
           <SubMessage>{user.login.username}</SubMessage>
           </Stacker>
          </FlexDiv>
      
      
    );
};

export default UserMiniCard;