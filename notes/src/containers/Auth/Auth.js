import React  from 'react';
import Login from "./Login"

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {

                loggedIn: false
            };
        }
        componentDidMount = () => {
            if (this.props.user === null) {
                this.setState({ loggedIn: false });

            } else if (!this.props.user) {

                this.setState({ loggedIn: true });
            }
        };

        render() {
            // return <App />
            if (this.state.loggedIn) return <App />;
            return <Login />;

        }
    };
export default Authenticate;
