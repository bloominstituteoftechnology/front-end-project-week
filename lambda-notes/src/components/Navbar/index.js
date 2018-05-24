// Dependencies
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// Redux actions
import { loginUser, logoutUser } from '../Actions';
// Components
import { Button, RLink } from '../Button';
// CSS
import './Navbar.css';


class Navbar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: 'null',
    //     }
    // }

    render() {
        const { classes } = this.props;
        return (
            <div className={`navbar ${classes}`}>
                <h1>Lambda<br/>Notes</h1>
                { this.props.user ?
                    (<Fragment>
                        <RLink className="mt-2" to="/"><Button>View Your Notes</Button></RLink>
                        <RLink className="my-2" to="/new"><Button>+ Create New Note</Button></RLink>
                        {/* <RLink className="mb-2" to="/styles"><Button><i className="fas fa-paint-brush"></i></Button></RLink> */}
                        <Button onClick={this.props.logoutUser}>Log Out</Button>
                
                    
                    </Fragment>)
                    :
                    <Button className="my-2" onClick={this.props.loginUser}>Log In</Button>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
};

export default connect(mapStateToProps, { loginUser, logoutUser })(Navbar);