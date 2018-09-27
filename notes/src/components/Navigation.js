import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {goHome} from '../actions';

class Navation extends React.Component{
    goHome = event =>{
        event.preventDefault();
        this.props.goHome();
    }

    render(){
        return(
            <div>
                <div className='App'>
                    Lambda Notes
                </div>
                <div onClick={this.goHome}>
                    <Link to={'/'}>View Your Notes</Link>
                </div>
                <div>
                    <Link to={'/add-note'}>+ Create New Note</Link>
                </div>
            </div>
        )
    }
}

const mapDispatchtoProps = state =>({
})

export default connect(mapDispatchtoProps, {goHome})(Navation);