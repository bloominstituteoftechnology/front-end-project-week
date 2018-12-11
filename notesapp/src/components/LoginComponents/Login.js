import React from 'react'
import {LoginPageCont, HeroGirlImgDiv, WhiteBoxDiv1,
    WhiteBoxDiv2, LambdaLogo, LoginTitle, LoginTitle2,
    LoginParagraph, LoginForm, LoginInput, LoginButton, NavButtonText} from '../../Styles/LoginPageStyles'




class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
            <LoginForm onSubmit={this.props.loginFunction}>
            <LoginInput 
            placeholder="username"
            onChange={this.props.searchBarHandler}
            name="username"
            value={this.props.username}
            type="text"
            />
            <LoginInput 
            placeholder="password"
            onChange={this.props.searchBarHandler}
            name="password"
            value={this.props.password}
            type="password"
            />
            <LoginButton type="submit"><NavButtonText>Login</NavButtonText></LoginButton>
            </LoginForm>

            <p className="regTitle">New user? Register Here:</p>
            <button className="regButton" onClick={(ev => {ev.preventDefault(); this.props.history.push('/register')})}>Register</button>
        </LoginPageCont>
    )
}

}

export default Login;