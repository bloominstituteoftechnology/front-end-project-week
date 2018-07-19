import styled from 'styled-components';

export const FlexNotes = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
background-color: white;
overfly-x:hidden;
overflow-y: auto;
height:auto;
`
export const DeleteButton = styled.button`
border: none;
background-color: white;
outline:none;
color: red;
position: absolute;
top: 120px;
right: 240px;
font-size: 20px;
`

export const MiddleSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;


`
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

export const FlexDiv = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
background-color: white;
width: 50%;
height: 80vh;
overfly-x:hidden;
overflow-y: auto;
justify-content: space-around;
border-bottom: 1px solid #D8D8D8;
border-right: 1px solid #D8D8D8;

@media (max-width: 900px) {
    background: none;
    box-shadow: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
}
`
export const Sidebar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-bottom-left-radius: 10px;
width: 20%;
height: 80vh;
background-color: #D8D8D8


`
export const TopBar = styled.div`
position:relative;
z-index:25;
display:flex;
align-items: center;
justify-content:space-between;
width: 70%;
height: 52px;
top: 60px;
background-color: #262626;
background: -webkit-linear-gradient(to right, #242424, #424242); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #242424, #424242); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
border-top-left-radius: 20px;
border-top-right-radius: 10px;
`

export const MiniBox = styled.div`
position: relative;
width: 200px;
height: 250px;
padding: 10px;
display:flex;
flex-direction: column;
z-index: 0;
background-color: white;
margin-top:20px;
border: 1px solid lightgrey;
@media (max-width: 900px) {

}

`

export const TruncatedText = styled.p`
position: relative;
width: 200px;
whitespace: pre-wrap;
overflow-wrap: break-word;
overflow: hidden;
z-index: 5;
border-top: 1px solid grey;
padding-top: 30px;
`
export const Title = styled.h2`
text-align: center;
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

export const PrimaryButton = styled.button `
min-width: 75px;
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: #2BC1C4;  
color: white;
width: 100%;
border: none;
font-size: 16px;
height: 30px;
cursor: pointer;


`
export const Header = styled.span`
font-size: 30px;
font-weight: bold;
color: white;
padding: 10px 10px 0 10px;
border-bottom: 1px solid grey;
color: #363636;
`

export const LinkBar = styled.span`
display: flex;
align-items: center;
font-size: 16px;
color: grey;
padding-left: 20px;
padding-right: 10px;
`