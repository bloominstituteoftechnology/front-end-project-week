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


export const MiddleSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #2BC1C4;
width: 100%;
height: 100%;

`
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #2BC1C4;
width: 100vw;
height: 100vh;

`

export const FlexDiv = styled.div`
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
box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
            0 5px 15px 0 rgba(0,0,0,0.08);
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
border-bottom-left-radius: 10px;
width: 20%;
height: 80vh;
background-color: #D8D8D8
box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
            0 5px 15px 0 rgba(0,0,0,0.08);

`
export const TopBar = styled.div`
width: 70%;
height: 50px;
position: relative;
top: 50px;
background-color: #262626;
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
box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
            0 5px 15px 0 rgba(0,0,0,0.08);
@media (max-width: 900px) {

}

`

export const TruncatedText = styled.p`
position: relative;
width: 200px;
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