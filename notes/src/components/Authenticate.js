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

      console.log(userList)
      console.log(logs)
      console.log(name[0], login[0])

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
      			<Redirect push to='/login'/>
            <Login />
          </div>
    		)
    	}
    }
  };
export default Authenticate;



//import { Redirect } from 'react-router-dom';

//import styled from 'styled-components';


      // if (newState.loginSuccess === true){
      //   return (
      //     <Containerz>
      //       <PostsPage />
      //     </Containerz>
      //   )
      // } else {
      //   localStorage.clear();
      //   return (
      //     <Containerz>
      //       <Login />
      //     </Containerz>
      //   )
      // }
