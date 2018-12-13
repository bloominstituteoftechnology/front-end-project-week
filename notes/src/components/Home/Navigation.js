import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const keyName = process.env.REACT_APP_TOKEN_ITEM;


class Navigation extends Component {

    state = {
        mode: 'notAuth'
    }

    componentDidMount() {
        const token = localStorage.getItem(keyName);

        if (token && token !== 'undefined') {
            this.setState({mode: 'auth'})
        } else {
            console.log(this.props);
            this.props.match.path === '/login'
            ? this.setState({mode: 'login'})
            : this.setState({mode: 'notAuth'})
        }
    }

    goHome = () => {
        this.props.history.push('/')
    }

    goToAction = () => {
        if (this.state.mode === 'auth') {
            this.props.history.push('/app')
        } else if (this.state.mode === 'notAuth') {
            this.props.history.push('/login')
        } else if (this.state.mode === 'login') {
            this.props.history.push('/register')
        }
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    <LogoContainer onClick={() => this.goHome()}>
                        <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo" />
                        <span className="keep-name">Keep</span>
                    </LogoContainer>
                    <Action onClick={() => this.goToAction()} mode={this.state.mode} />
                </Container>
            </Wrapper>

        );
    }
}

export default Navigation;

const Action = styled.div`
    width: 125px;
    height: 35px;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.54);
    line-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        color: rgba(0,0,0,1);
        border-color: rgba(0,0,0,1);
    }
    :after {
        content: 'Login';
        ${props => props.mode === 'auth' && css`
            content: 'Dashboard'
        `}
        ${props => props.mode === 'notAuth' && css`
            content: 'Login'
        `}
        ${props => props.mode === 'login' && css`
            content: 'Register'
        `}
    }

`;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    padding: 0 40px;
    max-width: 940px;
    min-width: 560px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(0,0,0,.54);
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    user-select: none;
    cursor: pointer;
    img {
        margin-right: 15px;
    }
`;
