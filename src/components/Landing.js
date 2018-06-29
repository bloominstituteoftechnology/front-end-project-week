import React from "react";
import { Login, Register } from "./index.js";

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: true
        }
    }

    changeComponent = () => {
        this.setState({ login: !this.state.login })
    }
    
    render() {
        return (
            <div>
                <div>
                    <h2>Welcome to Lambda Notes</h2>
                </div>
                <div>
                    {this.state.login ? (
                        <Login changeComponent={this.changeComponent}/>
                    ) : (
                        <Register changeComponent={this.changeComponent}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Landing;