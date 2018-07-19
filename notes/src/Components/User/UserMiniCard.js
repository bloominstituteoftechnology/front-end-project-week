import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { user } from '../../data';
console.log(user);
const FlexDiv = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 margin-right: 20px;
 text-decoration: none;

 height: 48px;
`
const SmallProfileImage = styled.img`
height: 50px;
width: 50px;
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
          {(user) && <SmallProfileImage src={props.newUser.photoURL} />} 
          <Stacker>
           <WelcomeMessage>Welcome, {props.newUser.displayName}!</WelcomeMessage>
           <SubMessage>{props.newUser.email}</SubMessage>
           </Stacker>
          </FlexDiv>
      
      
    );
};

export default UserMiniCard;