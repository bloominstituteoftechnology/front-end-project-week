import styled from 'styled-components';

export const FlexDiv = styled.div`
display: flex;
flex-direction: row;
align-items: space-around;
background-color: lightgrey;
border: 1px solid red;
width: 70%;
height: 100vh;
justify-content: space-around;
`

export const MiniBox = styled.div`
position: relative;
width: 300px;
height: 250px;
padding: 10px;
display:flex;
flex-direction: column;
border: 1px solid black;
z-index: 0;
background-color: white;

`

export const TruncatedText = styled.p`
position: relative;
width: 300px;
overflow: hidden;
z-index: 5;
`

export const MaskText = styled.div`
width: 100%;
height: 70px;
z-index: 10;
position: absolute;
bottom: 0;
right: 0;
background: rgba(255,255,255,0);
background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.73) 33%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,0)), color-stop(25%, rgba(255,255,255,0.55)), color-stop(33%, rgba(255,255,255,0.73)), color-stop(63%, rgba(255,255,255,1)), color-stop(100%, rgba(255,255,255,1)));
background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.73) 33%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%);
background: -o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.73) 33%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%);
background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.73) 33%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%);
background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.73) 33%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 );
`