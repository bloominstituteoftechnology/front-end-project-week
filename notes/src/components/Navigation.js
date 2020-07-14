import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {goHome} from '../actions';
import { NavStyled, AppHeader, NavButton } from './style';

class Navation extends React.Component{
    goHome = event =>{
        event.preventDefault();
        this.props.goHome();
    }

    render(){
        return(
            <NavStyled>
                <AppHeader>
                    Lambda <br/> Notes
                </AppHeader>
                <NavButton onClick={this.goHome}>
                    <Link to={'/'}>View Your Notes</Link>
                </NavButton>
                <NavButton>
                    <Link to={'/add-note'}>+ Create New Note</Link>
                </NavButton>
            </NavStyled>
        )
    }
}

const mapDispatchtoProps = state =>({
})

export default connect(mapDispatchtoProps, {goHome})(Navation);