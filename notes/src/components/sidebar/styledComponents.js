import styled from 'styled-components';

const SideBaR=styled.div`
    width: 25%;
    text-align: left;
    background-color: #c6c6c6;
    min-height: 100vh;
`
const SideBarHeading=styled.h1`
    color:#424242;
    font-weight: Bold;
    margin-left: 10%;
`
const SideBarButton=styled.button`
    width: 80%;
    margin: 0 auto;
    height: 40px;
    color:#FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:15px;
    outline:none;
    border-color:transparent;
    
    &:hover{
        opacity:0.85;
    }
`
export {SideBaR,SideBarHeading,SideBarButton};