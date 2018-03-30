import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

export default class NavBar extends React.Component {

    state = {
        modal: false,
        username: '',
    };
            
    handleLogin = (e) => {
        const username = e.target.parentNode.getElementsByTagName("input")[0].value;
        const password = e.target.parentNode.getElementsByTagName("input")[1].value;
        if (username && password) {
            this.props.login(username, password);
            this.setState({ modal: false, username: username });
            setTimeout (() => { 
                console.log("Success!")
                this.props.history.push('/notes');
            }, 501)
        }
        else { 
            if (!username) e.target.parentNode.getElementsByTagName("input")[0].style.border = "1px solid red";
            if (!password) e.target.parentNode.getElementsByTagName("input")[1].style.border = "1px solid red";
        }
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    handleSignout = () => {
        this.props.signout(() => this.props.history.push("/"));
    }

    render() {
        this.toggle = this.toggle.bind(this);
        const AuthButton = withRouter(
            ({ history }) =>
                this.props.isAuth ? (
                <div>
                    Welcome {this.state.username}{" "}
                    <button onClick={this.handleSignout}> Sign out </button>
                </div>
                ) : (
                <div>
                    <button onClick={this.toggle}>Log in</button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered>
                            <ModalHeader toggle={this.toggle}>
                                Enter your username and password
                            </ModalHeader>
                            <ModalFooter>
                                <div className="Tags">
                                <div><div>Username:</div><input name="username"></input></div>
                                <div><div>Password:</div><input name="password"></input></div>
                                </div>
                                <Button className="Button" onClick={this.handleLogin}>Log In</Button>
                            </ModalFooter>
                            </Modal>
                </div>
                )
            );

        return (
            <div className="NavBar">
                <AuthButton />
                <h1 className="NavBar__Title">Lambda Notes</h1>
                <Link to="/notes"><div className="NavBar__Button">View Your Notes</div></Link>
                <Link to="/AddNote"><div className="NavBar__Button">+ Create New Note</div></Link>
                <a href={this.props.export()} download="LambdaNotesExport.csv"><div className="NavBar__Button">Export Notes CSV</div></a>
            </div>
        )
    };
}