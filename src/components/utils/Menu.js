import React from "react";
import { connect } from "react-redux";
import gear from "../../assets/gear.svg";
import { resetStore } from "../../actions";

class Sidebar extends React.Component {

    signoutHandler = () => {
        localStorage.removeItem('jwt');
        this.props.resetStore();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="nav-menu">
                    <a><img src={gear} alt="settings-icon"/></a>
                    <ul>
                        <li><button className="button secondary">Account</button></li>
                        <li><button className="button secondary" onClick={this.signoutHandler}>Log Out</button></li>
                    </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { resetStore })(Sidebar);