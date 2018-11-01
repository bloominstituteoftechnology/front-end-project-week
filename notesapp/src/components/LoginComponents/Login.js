import React from 'react'
import {LoginPageCont, HeroGirlImgDiv, WhiteBoxDiv1,
    WhiteBoxDiv2, LambdaLogo, LoginTitle, LoginTitle2,
    LoginParagraph, LoginForm, LoginInput, LoginButton, NavButtonText} from '../../Styles/LoginPageStyles'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameInput: "",
            passwordInput: "",
        }
    }

changeHandler = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
loginFunction = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.usernameInput)
    window.location.reload()
}


render() {
    return (
        <LoginPageCont>
            <LambdaLogo></LambdaLogo>
            <HeroGirlImgDiv>
                <WhiteBoxDiv1>
                </WhiteBoxDiv1>
                <WhiteBoxDiv2>
                </WhiteBoxDiv2>
            </HeroGirlImgDiv>
            <LoginTitle>A Revolutionary New App</LoginTitle>
                <LoginTitle2>That Takes Your Notes</LoginTitle2>
                <LoginParagraph>Front End Project Week is a one week, immersive sprint that gives you the practice you need to launch your new React or Redux Notes App—from the comfort of your own home.</LoginParagraph>
            <LoginForm onSubmit={this.loginFunction}>
            <LoginInput 
            placeholder="username"
            onChange={this.changeHandler}
            name="usernameInput"
            value={this.state.userInput}
            type="text"
            />
            <LoginInput 
            placeholder="password"
            onChange={this.changeHandler}
            name="passwordInput"
            value={this.state.passwordInput}
            type="password"
            />
            <LoginButton type="submit"><NavButtonText>See How it Works</NavButtonText></LoginButton>
            </LoginForm>
        </LoginPageCont>
    )
}

}

export default Login;