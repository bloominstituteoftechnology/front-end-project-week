import React  from 'react';
import Login from "./Login"

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                user: this.props.user,
                loggedIn: false
            };
        }
        componentDidMount = () => {
            if (this.state.user === null) {
                this.setState({
                    loggedIn: false
                });

            } else if (this.state.user !== null) {

                this.setState({
                    loggedIn: true
                });

            }
        };


        render() {
            // return <App />
            if (this.state.loggedIn) return <App />;
            return <Login />;

        }
    };
export default Authenticate;
