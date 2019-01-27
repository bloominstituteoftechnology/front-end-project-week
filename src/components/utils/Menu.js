import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import gear from "../../assets/gear.svg";
import nightmode from "../../assets/nightmode.svg";
import { resetStore } from "../../actions";

class Menu extends React.Component {

    state = {
        active: false
    }

    signoutHandler = () => {
        localStorage.removeItem('jwt');
        this.props.resetStore();
        this.props.history.push('/');
    }

    toggleMenu = () => {
        this.setState({ active: !this.state.active })
    }

    closeMenu = () => {
        this.setState({ active: false });
    }

    render() {
        const { active } = this.state;
        return (
            <div className="nav-menu" onMouseLeave={this.closeMenu}>
                    <a onClick={this.toggleMenu}><img src={gear} className="gear" alt="settings icon"/></a>
                    {active ? (
                        <ul>
                            <li><Link to="/account" className="button secondary">Account</Link></li>
                            <li><button className="button secondary" onClick={this.signoutHandler}>Log     Out</button></li>
                            <li><a /*onClick={}*/><img src={nightmode} alt="night mode"/></a></li>
                        </ul>
                    ) : (null)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default withRouter(connect(mapStateToProps, { resetStore })(Menu));