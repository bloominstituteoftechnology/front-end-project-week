// Button is a styled Component

import styled from 'styled-components';

const Button = styled.button `
background-color : #24B8BD;
border : 2px solid #88A6A7;
height:50px;
width: 150px;
margin-bottom: 10px;
:hover{
    cursor:pointer;
    background-color:lightblue;
    border: 3px solid #24B8BD;
    transition:0.3s ease;
    
}
`

export default Button;