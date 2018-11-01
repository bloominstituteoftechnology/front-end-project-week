import styled from 'styled-components'
import herogirl from '../img/herogirl.png'
import logo from '../img/Lambda-Logo.png'


export const LoginPageCont = styled.div `
position: relative;
    width: 100vw;
    height: 100vh;
    
`

export const HeroGirlImgDiv = styled.div `
    z-index: 1;
    height: 100%;
    width: 890px;
    position: absolute;
    right: 0px;
    background-image: url(${herogirl});
    background-size: cover;
    opacity: 1;
    background-repeat: no-repeat;
`

export const WhiteBoxDiv1 = styled.div `
    top: 0px;
    left: 0px;
    position: absolute;
    height: 100%;
    z-index: 2;
    right: 540px;
    transform-origin: 0px 0px 0px;
    transform: skewX(-25deg);
    background: rgb(255, 255, 255);
`

export const WhiteBoxDiv2 = styled.div `
    bottom: 0px;
    right: 471px;
    position: absolute;
    height: 100%;
    z-index: 2;
    width: 31px;
    -webkit-transform-origin: 100% 100% 0px;
    -ms-transform-origin: 100% 100% 0px;
    transform-origin: 100% 100% 0px;
    -webkit-transform: skewX(-25deg);
    -ms-transform: skewX(-25deg);
    transform: skewX(-25deg);
    background: rgb(255,255,255);
    overflow: hidden;
`

export const LambdaLogo = styled.div `
position: absolute;
top: 30px;
left: 200px;
z-index: 2;
background-image: url(${logo});
background-size: cover;
opacity: 1;
background-repeat: no-repeat;
height: 132px;
width: 10%;
`

export const LoginTitle = styled.h1 `
    color: rgb(24,31,34);
    font-size: 220%;
    font-weight: 100;
    line-height: 50px;
    white-space: nowrap;
    margin: 0px;
    font-family: 'europa',sans-serif;
    position: absolute;
    left: -770px;
    top: 200px;
    z-index: 2;
`

export const LoginTitle2 = styled.h1 `
    color: rgb(24,31,34);
    font-size: 220%;
    font-weight: 300;
    line-height: 50px;
    white-space: nowrap;
    margin: 0px;
    font-family: 'europa',sans-serif;
    position: absolute;
    left: -771px;
    top: 245px;
    z-index: 2;
`

export const LoginParagraph = styled.p `
    color: rgb(94,97,109);
    font-family: europa,sans-serif;
    font-size: 120%;
    font-weight: 300;
    line-height: 34px;
    position: absolute;
    left: -771px;
    top: 285px;
    z-index: 2;
    display: flex;
    flex-wrap: nowrap;
    width: 60%;
`

export const LoginForm = styled.form `
    position: absolute;
    left: 260px;
    top: 425px;
    z-index: 4;
    display: flex;
    flex-direction: column;
`

export const LoginInput = styled.input `
    height: 24px;
    margin-bottom: 20px;
    width: 130%;
    border-radius: 3px;
`


export const LoginButton = styled.button `
    background-color: rgb(160, 1, 30);
    color: rgb(255, 255, 255);
    font-family: europa, sans-serif;
    cursor: pointer;
    opacity: 1;
    -webkit-font-smoothing: antialiased;
    font-size: 90%;
    font-weight: 700;
    text-decoration: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 4px;
    padding: 14px 22px;
`

export const NavButtonText = styled.p `
  margin: 0;
  
  ${LoginButton}:hover & {
    text-decoration: underline;
    cursor: pointer;
    background-color: rgb(160, 1, 30, 0.5);
  }
  `

// export const LoginPageCont = styled.div `
// `

// export const LoginPageCont = styled.div `
// `

// export const LoginPageCont = styled.div `
// `

// export const LoginPageCont = styled.div `
// `