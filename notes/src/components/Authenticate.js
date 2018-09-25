import React from "react";
import Login from "./Login";
import userData from './userData';
import { Redirect } from 'react-router-dom';

const Authenticate = App =>
  // set up our state so that we have some conditional logging
  class extends React.Component {
	  constructor(){
			super();
			this.state = {
				loginSuccess: false,
				possibleUsers: userData,
			};
		}

    render() {
    	const name = Object.keys(localStorage);
    	const login = Object.values(localStorage);
      const userList = this.state.possibleUsers.map(item => item.name);
      const logs = this.state.possibleUsers.map(item => item.login);

      const newState = {...this.state};


      if(userList.includes(name[0]) && logs.includes(login[0])){
        newState.loginSuccess = true;
      }

    	if (newState.loginSuccess === true){
    		return (
          <div>
            <Redirect to='/notes'/>
            <App />
          </div>
    		)
    	} else {
    		localStorage.clear();
    		return (
          <div>
      			<Redirect to='/login'/>
            <Login />
          </div>
    		)
    	}
    }
  };
export default Authenticate;
